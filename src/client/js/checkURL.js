
    export function ValidURL(str) {
        var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!regex .test(str)) {
          alert("Please enter valid URL.");
          return false;
        } else {
          return true;
        }
      }