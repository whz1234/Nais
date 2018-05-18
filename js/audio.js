/*��6��Ԫ ��Ŀ6-3 ���ֲ����� js�ļ�*/
var audio = document.getElementById('audio');
var playpause = document.getElementById("play-pause");
var volume = document.getElementById("volume");
audio.controls = false;
//������Ƹ���������ͣ�ķ�����togglePlayPause()��
//�÷��������л�������ͣ��ͬʱ��Ҫ�л�����ͼ��Ͱ�ť��title����ֵ
function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "��ͣ";
      playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
      audio.play();
   } else {
      playpause.title = "����";
      playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
      audio.pause();
   }
}
//�������������ķ�����setVolume()������Audio�����volume���Ե���range�ؼ���ֵ
function setVolume() {
   audio.volume = volume.value;
}


