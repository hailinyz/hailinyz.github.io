// 音乐弹窗功能
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('musicModal');
    const modalBtn = document.getElementById('anMusicModalBtn');
    const closeBtn = document.querySelector('.close');
    const closeModalBtn = document.getElementById('closeModal');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    // 打开弹窗
    modalBtn.onclick = function() {
      modal.style.display = "block";
      // 添加进入动画
      modal.style.animation = "fadeIn 0.3s";
    }
  
    // 关闭弹窗
    function closeModal() {
      modal.style.display = "none";
    }
  
    closeBtn.onclick = closeModal;
    closeModalBtn.onclick = closeModal;
  
    // 点击弹窗外部关闭
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    }
  
    // 音乐控制功能
    playBtn.onclick = function() {
      // 调用音乐播放器的播放功能
      if (window.anzhiyu && window.anzhiyu.musicToggle) {
        window.anzhiyu.musicToggle();
      }
    }
  
    pauseBtn.onclick = function() {
      // 调用音乐播放器的暂停功能
      const metingPlayer = document.querySelector('meting-js');
      if (metingPlayer && metingPlayer.aplayer) {
        metingPlayer.aplayer.pause();
      }
    }
  
    nextBtn.onclick = function() {
      // 调用音乐播放器的下一首功能
      const metingPlayer = document.querySelector('meting-js');
      if (metingPlayer && metingPlayer.aplayer) {
        metingPlayer.aplayer.skipForward();
      }
    }
  
    // 添加键盘快捷键
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });
  
  // 添加CSS动画
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {opacity: 0; transform: translateY(-50px);}
      to {opacity: 1; transform: translateY(0);}
    }
  `;
  document.head.appendChild(style);