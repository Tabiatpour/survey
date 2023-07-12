function ChangeSatisfaction(status) {
  // $img = $("<div></div>").addClass("resonDetail").html("ASdasd");

  var $satisfactionOrder = $(`
    <div class="reasonTitle">دلایل رضایت از سفارش</div>
    <div class="reasonDetailBox" id="rdb">
        <div class="resonDetails">
        <img
        src="./img/checkbox.png"
        alt=""
        id="select1"
        onclick="ChangeCheckbox(1)"
        class="checkbox"
        tabiat="100"
      />        <label for="reson1" class="mr-30px"> کیفیت مناسب سفارش </label>
        </div>
        <div class="resonDetails">
        <img
        src="./img/checkbox.png"
        alt=""
        id="select2"
        onclick="ChangeCheckbox(2)"
        class="checkbox"/>        
      <label for="reson2" class="mr-30px">قیمت مناسب</label>
        </div>
        <div class="resonDetails">
        <img
        src="./img/checkbox.png"
        alt=""
        id="select3"
        onclick="ChangeCheckbox(3)"
        class="checkbox"/>        
      <label for="reson3" class="mr-30px"> منو متنوع </label>
        </div>
        <div class="resonDetails">
        <img
        src="./img/checkbox.png"
        alt=""
        id="select4"
        onclick="ChangeCheckbox(4)"
        class="checkbox"
      />
        <label for="reson4" class="mr-30px"> بسته بندی مناسب </label>
        </div>
        <div class="resonDetails">
        <img
                src="./img/checkbox.png"
                alt=""
                id="select5"
                onclick="ChangeCheckbox(5)"
                class="checkbox"
              />
        <label for="reson5" class="mr-30px">
            رضایت از زمان آماده سازی</label
        >
        </div>
    </div>
    <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="سایر دلایل ..."
        class="textAreaInput"
    ></textarea>    </div>

    `);

  var $dissatisfactionOrder = $(`
  <div class="reasonTitle">دلایل عدم رضایت از سفارش</div>
  <div class="reasonDetailBox" id="rdb">
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select1"
        onclick="ChangeCheckbox(1)"
        class="checkbox"
      />  
        <label for="reson1" class="mr-30px"> قیمت نامتعارف </label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select2"
        onclick="ChangeCheckbox(2)"
        class="checkbox"
      />  
        <label for="reson2" class="mr-30px">مغایرت در سفارش</label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select3"
        onclick="ChangeCheckbox(3)"
        class="checkbox"
      />  
        <label for="reson3" class="mr-30px">عدم رعایت بهداشت </label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select4"
        onclick="ChangeCheckbox(4)"
        class="checkbox"
      />  
        <label for="reson4" class="mr-30px">کیفیت پایین سفارش </label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select5"
        onclick="ChangeCheckbox(5)"
        class="checkbox"
      />  
        <label for="reson5" class="mr-30px">
            تأخیر در دریافت سفارش</label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select6"
        onclick="ChangeCheckbox(6)"
        class="checkbox"
      />  
        <label for="reson6" class="mr-30px">عدم تناسب قیمت با کیفیت </label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select7"
        onclick="ChangeCheckbox(7)"
        class="checkbox"
      />  
        <label for="reson7" class="mr-30px">طولانی بودن زمان آماده سازی </label>
      </div>
  </div>
  <textarea
      name=""
      id=""
      cols="30"
      rows="5"
      placeholder="سایر دلایل ..."
      class="textAreaInput-2"
  ></textarea>
  </div>`);
  var $satisfactionDelivery = $(`
    <div class="reasonTitle">دلایل رضایت از تحویل سفارش</div>
    <div class="reasonDetailBox" id="rdb">
        <div class="resonDetails">
        <img
        src="./img/checkbox.png"
        alt=""
        id="select1"
        onclick="ChangeCheckbox(1)"
        class="checkbox"
        tabiat="100"
      />        <label for="reson1" class="mr-30px">تحویل به موقع سفارش </label>
        </div>
        <div class="resonDetails">
        <img
        src="./img/checkbox.png"
        alt=""
        id="select2"
        onclick="ChangeCheckbox(2)"
        class="checkbox"/>        
      <label for="reson2" class="mr-30px">دریافت سفارش سالم</label>
        </div>
        <div class="resonDetails">
        <img
        src="./img/checkbox.png"
        alt=""
        id="select3"
        onclick="ChangeCheckbox(3)"
        class="checkbox"/>        
      <label for="reson3" class="mr-30px">برخورد مناسب پیک </label>
        </div>
        </div>
    <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="سایر دلایل ..."
        class="textAreaInput"
    ></textarea>    </div>

    `);

  var $dissatisfactionDelivery = $(`
  <div class="reasonTitle">دلایل عدم رضایت از تحویل سفارش</div>
  <div class="reasonDetailBox" id="rdb">
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select1"
        onclick="ChangeCheckbox(1)"
        class="checkbox"
      />  
        <label for="reson1" class="mr-30px"> عدم رضایت از زمان آماده سازی </label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select2"
        onclick="ChangeCheckbox(2)"
        class="checkbox"
      />  
        <label for="reson2" class="mr-30px">بسته بندی مناسب</label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select3"
        onclick="ChangeCheckbox(3)"
        class="checkbox"
      />  
        <label for="reson3" class="mr-30px">مغایرت سفارش</label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select4"
        onclick="ChangeCheckbox(4)"
        class="checkbox"
      />  
        <label for="reson4" class="mr-30px">کیفیت پایین سفارش </label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select5"
        onclick="ChangeCheckbox(5)"
        class="checkbox"
      />  
        <label for="reson5" class="mr-30px">
           برخورد نامناسب پیک</label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select6"
        onclick="ChangeCheckbox(6)"
        class="checkbox"
      />  
        <label for="reson6" class="mr-30px">عدم تناسب قیمت با کیفیت </label>
      </div>
      <div class="resonDetails">
<img
        src="./img/checkbox.png"
        alt=""
        id="select7"
        onclick="ChangeCheckbox(7)"
        class="checkbox"
      />  
        <label for="reson7" class="mr-30px">آسیب در حمل و نقل</label>
      </div>
  </div>
  <textarea
      name=""
      id=""
      cols="30"
      rows="5"
      placeholder="سایر دلایل ..."
      class="textAreaInput-2"
  ></textarea>
  </div>`);

  $("#verygood").attr("src", "./img/imoji/verygood.png");
  $("#good").attr("src", "./img/imoji/good.png");
  $("#poker").attr("src", "./img/imoji/poker.png");
  $("#bad").attr("src", "./img/imoji/bad.png");
  $("#verybad").attr("src", "./img/imoji/verybad.png");

  $(".oneSelect").removeClass("selected");
  $("#reasonBox").html("");

  //   var q = ["A", "B", "C"];

  // ------ start order ------
  if (status == 1) {
    if (!$("#verygood").hasClass("selected")) {
      $("#verygood").attr("src", "./img/imoji/verygood-selected.png");
      $("#verygood").addClass("selected");
      $("#reasonBox").html($satisfactionOrder);
    } else {
      console.log("verygood");
      $("#verygood").attr("src", "./img/imoji/verygood.png");
      $("#verygood").removeClass("selected");
    }
  }
  if (status == 2) {
    if (!$("#good").hasClass("selected")) {
      $("#good").attr("src", "./img/imoji/good-selected.png");
      $("#good").addClass("selected");
      $("#reasonBox").html($satisfactionOrder);
    } else {
      console.log("good");
      $("#good").attr("src", "./img/imoji/good.png");
      $("#good").removeClass("selected");
    }
  }
  if (status == 3) {
    if (!$("#poker").hasClass("selected")) {
      $("#poker").attr("src", "./img/imoji/poker-selected.png");
      $("#poker").addClass("selected");
      $("#reasonBox").html($dissatisfactionOrder);
    } else {
      console.log("poker");
      $("#poker").attr("src", "./img/imoji/poker.png");
      $("#poker").removeClass("selected");
    }
  }
  if (status == 4) {
    if (!$("#bad").hasClass("selected")) {
      $("#bad").attr("src", "./img/imoji/bad-selected.png");
      $("#bad").addClass("selected");
      $("#reasonBox").html($dissatisfactionOrder);
    } else {
      console.log("bad");
      $("#bad").attr("src", "./img/imoji/bad.png");
      $("#bad").removeClass("selected");
    }
  }
  if (status == 5) {
    if (!$("#verybad").hasClass("selected")) {
      $("#verybad").attr("src", "./img/imoji/verybad-selected.png");
      $("#verybad").addClass("selected");
      $("#reasonBox").html($dissatisfactionOrder);
    } else {
      console.log("verybad");
      $("#verybad").attr("src", "./img/imoji/verybad.png");
      $("#verybad").removeClass("selected");
    }
  }
  // ------ end order ------
  // ------ start delivery ------
  if (status == 6) {
    if (!$("#verygood").hasClass("selected")) {
      $("#verygood").attr("src", "./img/imoji/verygood-selected.png");
      $("#verygood").addClass("selected");
      $("#reasonBox").html($satisfactionDelivery);
    } else {
      console.log("verygood");
      $("#verygood").attr("src", "./img/imoji/verygood.png");
      $("#verygood").removeClass("selected");
    }
  }
  if (status == 7) {
    if (!$("#good").hasClass("selected")) {
      $("#good").attr("src", "./img/imoji/good-selected.png");
      $("#good").addClass("selected");
      $("#reasonBox").html($satisfactionDelivery);
    } else {
      console.log("good");
      $("#good").attr("src", "./img/imoji/good.png");
      $("#good").removeClass("selected");
    }
  }
  if (status == 8) {
    if (!$("#poker").hasClass("selected")) {
      $("#poker").attr("src", "./img/imoji/poker-selected.png");
      $("#poker").addClass("selected");
      $("#reasonBox").html($dissatisfactionDelivery);
    } else {
      console.log("poker");
      $("#poker").attr("src", "./img/imoji/poker.png");
      $("#poker").removeClass("selected");
    }
  }
  if (status == 9) {
    if (!$("#bad").hasClass("selected")) {
      $("#bad").attr("src", "./img/imoji/bad-selected.png");
      $("#bad").addClass("selected");
      $("#reasonBox").html($dissatisfactionDelivery);
    } else {
      console.log("bad");
      $("#bad").attr("src", "./img/imoji/bad.png");
      $("#bad").removeClass("selected");
    }
  }
  if (status == 10) {
    if (!$("#verybad").hasClass("selected")) {
      $("#verybad").attr("src", "./img/imoji/verybad-selected.png");
      $("#verybad").addClass("selected");
      $("#reasonBox").html($dissatisfactionDelivery);
    } else {
      console.log("verybad");
      $("#verybad").attr("src", "./img/imoji/verybad.png");
      $("#verybad").removeClass("selected");
    }
  }
}

function ChangeCheckbox(status) {
  // var q = ["A", "B", "C"];
  if (status == 1) {
    if (!$("#select1").hasClass("selected")) {
      $("#select1").addClass("selected");
      $("#select1").attr("src", "./img/checkbox-selected.png");
    } else {
      //   console.log("select");
      $("#select1").attr("src", "./img/checkbox.png");
      $("#select1").removeClass("selected");
    }
  }
  if (status == 2) {
    if (!$("#select2").hasClass("selected")) {
      $("#select2").addClass("selected");
      $("#select2").attr("src", "./img/checkbox-selected.png");
    } else {
      //   console.log("select");
      $("#select2").attr("src", "./img/checkbox.png");
      $("#select2").removeClass("selected");
    }
  }
  if (status == 3) {
    if (!$("#select3").hasClass("selected")) {
      $("#select3").addClass("selected");
      $("#select3").attr("src", "./img/checkbox-selected.png");
    } else {
      //   console.log("select");
      $("#select3").attr("src", "./img/checkbox.png");
      $("#select3").removeClass("selected");
    }
  }
  if (status == 4) {
    if (!$("#select4").hasClass("selected")) {
      $("#select4").addClass("selected");
      $("#select4").attr("src", "./img/checkbox-selected.png");
    } else {
      //   console.log("select");
      $("#select4").attr("src", "./img/checkbox.png");
      $("#select4").removeClass("selected");
    }
  }
  if (status == 5) {
    if (!$("#select5").hasClass("selected")) {
      $("#select5").addClass("selected");
      $("#select5").attr("src", "./img/checkbox-selected.png");
    } else {
      //   console.log("select");
      $("#select5").attr("src", "./img/checkbox.png");
      $("#select5").removeClass("selected");
    }
  }
  if (status == 6) {
    if (!$("#select6").hasClass("selected")) {
      $("#select6").addClass("selected");
      $("#select6").attr("src", "./img/checkbox-selected.png");
    } else {
      //   console.log("select");
      $("#select6").attr("src", "./img/checkbox.png");
      $("#select6").removeClass("selected");
    }
  }
  if (status == 7) {
    if (!$("#select7").hasClass("selected")) {
      $("#select7").addClass("selected");
      $("#select7").attr("src", "./img/checkbox-selected.png");
    } else {
      //   console.log("select");
      $("#select7").attr("src", "./img/checkbox.png");
      $("#select7").removeClass("selected");
    }
  }
}

function sendData() {
  var classList = $(".emoji-img");
  $.each(classList, function (index, item) {
    if ($(item).hasClass("selected")) {
      console.log($(item).attr("tabiat"));
    }
  });
}
