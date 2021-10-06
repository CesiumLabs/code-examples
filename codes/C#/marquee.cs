using System;
using System.Net;
using System.IO;
using System.Threading;
using System.Collections.Generic;

public class marquee {
    public class ASCII {
        private int Left;
        private int Top;
        private int Width;
        private string Font = null;
        private string[] Main;
        private string[] Fonts = null;
        private bool RandomFont = false;
        private Random Generator = null;
        
        public ASCII(string Text) {
            if (Text.ToLower().Contains("--randomfont")) {
                this.RandomFont = true;
                this.Fonts = this.Get("http://artii.herokuapp.com/fonts_list").Split('\n');
                this.Generator = new Random();
                this.Font = this.Fonts[this.Generator.Next(0, this.Fonts.Length)];
                Text = Text.ToLower().Replace("--randomfont", "");
            }
            this.Main = this.RandomFont ? this.Get("http://artii.herokuapp.com/make?text="+Text+"&font="+this.Font).Split('\n') : this.Get("http://artii.herokuapp.com/make?text="+Text).Split('\n');
            this.Left = Console.CursorLeft;
            this.Top = Console.CursorTop;
            this.Width = Console.WindowWidth - 2;
        }
        
        private string Get(string URI) {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URI);
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            using(HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using(Stream stream = response.GetResponseStream())
            using(StreamReader reader = new StreamReader(stream)) {
                return reader.ReadToEnd();
            }
        }
        private string Move(string[] TextByLine, int Count) {
            string Res = String.Empty;
            if (Count < 0) {
                foreach (string Text in TextByLine) {
                    char[] ByChar = Text.ToCharArray();
                    for (int i = (Count * -1); i < Text.Length; i++) {
                        Res += ByChar[i].ToString();
                    }
                    Res += "\n";
                }
                return Res;
            }
            int DefaultCount = Count;
            foreach (string Text in TextByLine) {
                Count = DefaultCount;
                char[] ByChar = Text.ToCharArray();
                Res += new string(' ', Count);
                int EndLength = this.Width - Text.Length - Count;
                if (EndLength < 0) {
                    for (int i = 0; i < Text.Length; i++) {
                        Res += ByChar[i].ToString();
                        Count += 1;
                        if (Count > this.Width) break;
                    }
                } else {
                    Res += Text + new string(' ', EndLength);
                }
                Res += "\n";
            }
            return Res;
        }
        public void AnimateText() {
            int Frame = this.Main[0].Length * -1;
            while (true) {
                Thread.Sleep(50);
                Console.SetCursorPosition(this.Left, this.Top);
                string Text = this.Move(this.Main, Frame);
                Console.WriteLine(Text);
                Frame += 1;
                if (Frame > this.Width) Frame = this.Main[0].Length * -1;
            }
        }
    }
    public static void Main(string[] args) {
        if (args.Length < 1) { Console.WriteLine("parameters:\nmarquee.exe <text>\nmarquee.exe <text> --randomfont"); return; }
        ASCII ascii = new ASCII(string.Join(" ", args));
        ascii.AnimateText();
    }
}
