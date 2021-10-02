use web_view::*;

fn main() {
    let side = (500).rem_euclid(2f64.powi(32)) as u32 as i32;
    
    web_view::builder()
        .title("Hello World")
        .content(Content::Html("
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                        }
    
                        body {
                            background-color: #2e2e2e;
                            color: #ffffff;
                            text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <h1>Hello from webview-native</h1>
                    <button onclick=\"external.invoke('closeWindow')\">Close Window</button>
                    <script>
                        alert(\"Hello World\");
                    </script>
                </body>
            </html>
        "))
        .size(side, side)
        .debug(true)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();
}