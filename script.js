document.addEventListener('DOMContentLoaded', function () {
  const sidebarPositionSelect = document.getElementById('sidebar_position');
  const footerStyleSelect = document.getElementById('footer_style');
  const headerStyleSelect = document.getElementById('header_style');
  const backgroundInput = document.getElementById('background_color');
  const textColorInput = document.getElementById('text_color');
  const sidebar = document.querySelector('.sidebar');
  const footer = document.querySelector('.footer');
  const header = document.querySelector('.header');

  // Функція для зміни позиції сайдбару
  sidebarPositionSelect.addEventListener('change', function () {
    const selectedOption = sidebarPositionSelect.value;
    sidebar.classList.remove('sidebar-left', 'sidebar-right', 'no-sidebar');

    if (selectedOption === 'left') {
      sidebar.classList.add('sidebar-left');
    } else if (selectedOption === 'right') {
      sidebar.classList.add('sidebar-right');
    } else {
      sidebar.classList.add('no-sidebar');
    }
  });

  // Функція для зміни стилю футера
  footerStyleSelect.addEventListener('change', function () {
    const selectedOption = footerStyleSelect.value;
    footer.className = 'footer footer-' + selectedOption;
  });

  // Функція для зміни стилю шапки
  headerStyleSelect.addEventListener('change', function () {
    const selectedOption = headerStyleSelect.value;
    header.className = 'header header-' + selectedOption;
  });

  // Функція для зміни кольорів фону та тексту
  backgroundInput.addEventListener('change', function () {
    const color = backgroundInput.value;
    document.body.style.backgroundColor = color;
  });

  textColorInput.addEventListener('change', function () {
    const color = textColorInput.value;
    document.body.style.color = color;
  });
});
