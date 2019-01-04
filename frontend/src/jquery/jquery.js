$(document).ready(function(){
  $("button").click(function(){
    $(".link1").fadeIn(2000);
    $(".link2").fadeIn(3000);
    $(".link3").fadeIn(4000);
    $(".link4").fadeIn(5000);
  });

  let pos = 1;

  $("#btn-1").click(function(){
    $("#inp-" + pos).attr("value", "FROM");
    pos++;
  });

  $("#btn-2").click(function(){
    $("#inp-" + pos).attr("value", "personnes");
    pos++;
  });

  $("#btn-3").click(function(){
    $("#inp-" + pos).attr("value", "SELECT");
    pos++;
  });

  $("#btn-4").click(function(){
    $("#inp-" + pos).attr("value", "*");
    pos++;
  });

  $("#inp-1").click(function(){
    for(let i = 1; i < 5; i++) {
      $("#inp-" + i).attr("value", "");
      pos = 1;
    }
  });

  $("#inp-2").click(function(){
    for(let i = 1; i < 5; i++) {
      $("#inp-" + i).attr("value", "");
      pos = 1;
    }
  });

  $("#inp-3").click(function(){
    for(let i = 1; i < 5; i++) {
      $("#inp-" + i).attr("value", "");
      pos = 1;
    }
  });

  $("#inp-4").click(function(){
    for(let i = 1; i < 5; i++) {
      $("#inp-" + i).attr("value", "");
      pos = 1;
    }
  });

  $("#submit").click(function(){
    let req = "";
    for(let i = 1; i < 5; i++) {
      req = req + $("#inp-" + i).val() + " ";
    }
    req.trim();
    console.log(req);
    if(req === "SELECT * FROM personnes ") {
      alert("Gagné, vous pouvez passer au niveau suivant!");
      location.reload();
    }
    else {
      alert("Dommage, réessayez!");
      location.reload();
    }
  });
});



