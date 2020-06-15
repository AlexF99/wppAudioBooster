const interval = setInterval(() => {
  const appBar = document.querySelector('._3NrAe>span');
  if(appBar) {
    clearInterval(interval);

    const selectBtn = document.createElement('select');
    selectBtn.classList.add('select-btn');

    function addOption(labelOpt, valueOpt){
      const opt = document.createElement('option');
      opt.appendChild( document.createTextNode(labelOpt) );
      opt.value = valueOpt;
      selectBtn.appendChild(opt);
    }

    addOption('1x', 1);
    addOption('0.5x', 0.5);
    addOption('1.25x', 1.25);
    addOption('1.5x', 1.5);
    addOption('1.75x', 1.75);
    addOption('2x', 2);

    appBar.appendChild(selectBtn);

    selectBtn.addEventListener('change', () => {
      const audios = document.querySelectorAll('audio');
      let numAudios = audios.length;
      if (numAudios > 0) {
        let selectedOpt = selectBtn.options[selectBtn.selectedIndex];
        audios.forEach((item) => {
          item.playbackRate = selectedOpt.value;
        });
      }
    });
  }
}, 1000);
