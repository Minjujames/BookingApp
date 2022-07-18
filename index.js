function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  function validateFormFieldInput() {
    var tripDetails = document.cForm.tripDetails.value;
    var country = document.cForm.country.value;
    var name = document.querySelector('[name="name"]');
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var gender = document.cForm.gender.value;
    var age = document.cForm.age.value;
    var address = document.cForm.address.value;
    var countryB = document.cForm.countryB.value;
  
    var nameErr =
      (emailErr =
      mobileErr =
      countryErr =
      countryBErr =
      genderErr =
      ageErr =
      tripErr =
      addressErr =
        true);
    if (tripDetails == "") {
      printError("tripErr", "Please select this field");
    } else {
      printError("tripErr", "");
      tripErr = false;
    }
    // Validate country
    if (country == "Select") {
      printError("countryErr", "Please select your city");
    } else {
      printError("countryErr", "");
      countryErr = false;
    }
    if (countryB == "Select") {
      printError("countryBErr", "Please select your destination");
    } else {
      printError("countryBErr", "");
      countryErr = false;
    }
  
    // Validate name
    if (name == "") {
      printError("nameErr", "Please enter your name");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
      } else {
        printError("nameErr", "");
        nameErr = false;
      }
    }
  
    // Validate email address
    if (email == "") {
      printError("emailErr", "Please enter your email address");
    } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
        printError("emailErr", "Please enter a valid email address");
      } else {
        printError("emailErr", "");
        emailErr = false;
      }
    }
  
    // Validate mobile number
    if (mobile == "") {
      printError("mobileErr", "Please enter your mobile number");
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(mobile) === false) {
        printError("mobileErr", "Please enter a valid 10 digit mobile number");
      } else {
        printError("mobileErr", "");
        mobileErr = false;
      }
    }
    if (age == "") {
      printError("ageErr", "Please enter your age");
    } else {
      printError("ageErr", "");
      ageErr = false;
    }
  
    if (address == "") {
      printError("addressErr", "Please give your address");
    } else {
      printError("addressErr", "");
      countryErr = false;
    }
    // Validate tripdetails
  
    //validate gender
    if (gender == "") {
      printError("genderErr", "Please select your gender");
    } else {
      printError("genderErr", "");
      genderErr = false;
    }
  
    if (
      nameErr ||
      emailErr ||
      mobileErr ||
      countryErr ||
      countryBErr ||
      genderErr ||
      ageErr ||
      addressErr == true
    ) {
      return false;
    } else {
      var dataPreview =
        "You've entered the  details: \n" +
        "Full Name: " +
        name +
        "\n" +
        "Email Address: " +
        email +
        "\n" +
        "Mobile Number: " +
        mobile +
        "\n" +
        "Country: " +
        country +
        "\n" +
        "Gender: " +
        gender +
        "\n";
  
      alert(dataPreview);
    }
  }
  