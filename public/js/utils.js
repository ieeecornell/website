function loadProfiles() {

  $.get('about', function (data, status) {
    //console.log(data)
    $.each(data, function (index, data) {
      var team = data.team

      // Create a section header for the team
      $('#profiles').append(`<h2>${team}</h2>`)

      // Make a Flexbox for the team
      $('#profiles').append(`<div id='${team}' class="d-flex p-2 bd-highlight justify-content-center""></div>`)

      $.each(data.members, function (index, member) {
        var div_id = team + '_' + member.netid
        $(`#${team}`).append(`<div id='${div_id}'></div>`)

        $(`#${div_id}`).load('profile_card.html', function () {
          

          $(`#${div_id}`).find('img').attr('src', `/images/profiles/${member.netid + '.jpg'}`)
          $(`#${div_id}`).find('img').attr('alt', `${member.netid + '.jpg'}`)


          $(`#${div_id}`).find('h6').text(`${member.name}`)
          //$(`#${div_id}`).find('p').text(`${member.role}`)
        })
      })
    })

    // Reload Table of Contents
    Toc.init($('#toc'));
  })
}