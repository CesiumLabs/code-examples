import javax.sound.midi.*;

public class MiniMusicPlayer {
	
	public static void main(String[] args) {
		MiniMusicPlayer tone = new MiniMusicPlayer();
		tone.playMusic();
	}
	
	void playMusic() {
		try {
			Sequencer player = MidiSystem.getSequencer();
			player.open();
			
			Sequence seq = new Sequence(Sequence.PPQ, 4);
			Track track = seq.createTrack();
			
			ShortMessage x = new ShortMessage();
			x.setMessage(144,1,44,100);
			MidiEvent trackOn = new MidiEvent(x, 1);
			track.add(trackOn);
	
			ShortMessage y = new ShortMessage();
			y.setMessage(128,1,44,100);
			MidiEvent trackOff = new MidiEvent(y,16);
			track.add(trackOff);
	
			player.setSequence(seq);
			player.start();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
}