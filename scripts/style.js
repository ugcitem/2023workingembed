// 雪の量を調整するための変数
const numberOfSnowflakes = 100;

for (let i = 0; i < numberOfSnowflakes; i++) {
  createSnowflake();
}

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.innerText = '❄';
  document.body.appendChild(snowflake);

  snowflake.addEventListener('animationend', () => {
    snowflake.remove();
    createSnowflake();
  });
}
