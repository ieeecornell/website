
function loadProfiles() {

  $.get('about', function (data, status) {
    console.log("hello?");
    console.log(data)
    $.each(data, function (index, data) {
      var team = data.team

      // Create a section header for the team
      $('#profiles').append(`<h3>${team}</h3>`)

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
    Toc.init({
       $nav: $('#toc'),
       $scope: $("h3")});
  })
}


function loadCompanies() {
  console.log("can call function")
  $.get('sponsors', function (data, status) {
    console.log("got thing?")
    console.log(data)
    $.each(data, function (index, data) {
      var level = data.level

      // Create a section header for the team
      //$('#sponsors').append(`<h3>${level}</h3>`)

      // Make a Flexbox for the sponsor level
      $('#companies').append(`<div id='${level}' class="d-flex p-2 bd-highlight justify-content-center""></div>`)

      $.each(data.companies, function (index, company) {
        var div_id = level + '_' + company.image
        $(`#${level}`).append(`<div id='${div_id}'></div>`)

        $(`#${div_id}`).load('company_card.html', function () {
          

          $(`#${div_id}`).find('img').attr('src', `/images/sponsors/${company.image + '.jpg'}`)
          $(`#${div_id}`).find('img').attr('alt', `${company.image + '.jpg'}`)


          //$(`#${div_id}`).find('h6').text(`${member.name}`)
          //$(`#${div_id}`).find('p').text(`${member.role}`)
        })
      })
    })
  })
}

function loadMerch() {

  $.get('about', function (data, status) {
    console.log("merch hello?");
    console.log(data)
    $.each(data, function (index, data) {
      var team = data.team

      // Create a section header for the team
      $('#merch').append(`<h3>${team}</h3>`)

      // Make a Flexbox for the team
      $('#merch').append(`<div id='${team}' class="d-flex p-2 bd-highlight justify-content-center""></div>`)

      $.each(data.members, function (index, member) {
        var div_id1 = team + '_' + member.image1
        $(`#${team}`).append(`<div id='${div_id1}'></div>`)
        var div_id2 = team + '_' + member.image2
        $(`#${team}`).append(`<div id='${div_id2}'></div>`)

        $(`#${div_id}`).load('profile_card.html', function () {


          $(`#${div_id}`).find('img').attr('src', `/images/merch/${member.image1}`)
          $(`#${div_id}`).find('img').attr('alt', `${member.image1}`)
          $(`#${div_id}`).find('img').attr('src', `/images/merch/${member.image2}`)
          $(`#${div_id}`).find('img').attr('alt', `${member.image2}`)


          $(`#${div_id}`).find('h6').text(`${member.title}`)
          $(`#${div_id}`).find('p').text(`${member.subtitle}`)
        })
      })
    })

    // Reload Table of Contents
    Toc.init({
       $nav: $('#toc'),
       $scope: $("h3")});
  })
}

