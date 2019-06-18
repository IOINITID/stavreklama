function anichange(objName) {
  if ($(objName).css('display') == 'none') {
    $(objName).animate({
      height: 'show'
    }, 400);
  } else {
    $(objName).animate({
      height: 'hide'
    }, 200);
  }
}

$('.notification-info-button-1').click(function () {
  anichange('#notification-text-1');
  return false;
})

$('.notification-info-button-2').click(function () {
  anichange('#notification-text-2');
  return false;
})

$('.notification-info-button-3').click(function () {
  anichange('#notification-text-3');
  return false;
})


$('.notification-close-icon').on('click', function () {
  $(this).parent().hide();
});

$('.first-name-edit').click(function () {
  $('.first-name').prop('disabled', false);
  $('.first-name-edit').hide();
  $('.first-name').keydown(function (key) {
    if (key.which == 13) {
      $('.first-name').prop('disabled', true);
      $('.first-name-edit').show();
    }
  });
});

$('.second-name-edit').click(function () {
  $('.second-name').prop('disabled', false);
  $('.second-name-edit').hide();
  $('.second-name').keydown(function (key) {
    if (key.which == 13) {
      $('.second-name').prop('disabled', true);
      $('.second-name-edit').show();
    }
  });
});

$('.third-name-edit').click(function () {
  $('.third-name').prop('disabled', false);
  $('.third-name-edit').hide();
  $('.third-name').keydown(function (key) {
    if (key.which == 13) {
      $('.third-name').prop('disabled', true);
      $('.third-name-edit').show();
    }
  });
});

$('.first-contact-edit').click(function () {
  $('.first-contact').prop('disabled', false);
  $('.first-contact-edit').hide();
  $('.first-contact').keydown(function (key) {
    if (key.which == 13) {
      $('.first-contact').prop('disabled', true);
      $('.first-contact-edit').show();
    }
  });
});

$('.second-contact-edit').click(function () {
  $('.second-contact').prop('disabled', false);
  $('.second-contact-edit').hide();
  $('.second-contact').keydown(function (key) {
    if (key.which == 13) {
      $('.second-contact').prop('disabled', true);
      $('.second-contact-edit').show();
    }
  });
});

$('.third-contact-edit').click(function () {
  $('.third-contact').prop('disabled', false);
  $('.third-contact-edit').hide();
  $('.third-contact').keydown(function (key) {
    if (key.which == 13) {
      $('.third-contact').prop('disabled', true);
      $('.third-contact-edit').show();
    }
  });
});

$('.fourth-contact-edit').click(function () {
  $('.fourth-contact').prop('disabled', false);
  $('.fourth-contact-edit').hide();
  $('.fourth-contact').keyup(function (key) {
    if (key.which == 13) {
      $('.fourth-contact').prop('disabled', true);
      $('.fourth-contact-edit').show();
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (mouse) {
    var div = $(".first-name");
    if (!div.is(mouse.target) &&
      div.prop('disabled', false) &&
      div.has(mouse.target).length === 0) {
      div.prop('disabled', true);
      $('.first-name-edit').show();
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (mouse) {
    var div = $(".second-name");
    if (!div.is(mouse.target) &&
      div.prop('disabled', false) &&
      div.has(mouse.target).length === 0) {
      div.prop('disabled', true);
      $('.second-name-edit').show();
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (mouse) {
    var div = $(".third-name");
    if (!div.is(mouse.target) &&
      div.prop('disabled', false) &&
      div.has(mouse.target).length === 0) {
      div.prop('disabled', true);
      $('.third-name-edit').show();
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (mouse) {
    var div = $(".first-contact");
    if (!div.is(mouse.target) &&
      div.prop('disabled', false) &&
      div.has(mouse.target).length === 0) {
      div.prop('disabled', true);
      $('.first-contact-edit').show();
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (mouse) {
    var div = $(".second-contact");
    if (!div.is(mouse.target) &&
      div.prop('disabled', false) &&
      div.has(mouse.target).length === 0) {
      div.prop('disabled', true);
      $('.second-contact-edit').show();
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (mouse) {
    var div = $(".third-contact");
    if (!div.is(mouse.target) &&
      div.prop('disabled', false) &&
      div.has(mouse.target).length === 0) {
      div.prop('disabled', true);
      $('.third-contact-edit').show();
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (mouse) {
    var div = $(".fourth-contact");
    if (!div.is(mouse.target) &&
      div.prop('disabled', false) &&
      div.has(mouse.target).length === 0) {
      div.prop('disabled', true);
      $('.fourth-contact-edit').show();
    }
  });
});
