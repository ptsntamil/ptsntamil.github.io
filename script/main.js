const FN = "${!@}",
LN = "${&*}",
FNF = "${!@1}",
LNF = "${&*1}";
let list = [];//[{"firstName":"Michael","middleName":"","lastName":"Ferreira","domain":"automotivemastermind.com","email":"michael@automotivemastermind.com","format":"${!@}@"},{"firstName":"Harry","middleName":"","lastName":"Robertson","domain":"Liftoff.io","email":"harry@liftoff.io","format":"${!@}@liftoff.io"},{"firstName":"Eric","middleName":"","lastName":"Watkins","domain":"formulafolios.com","email":"ewatkins@formulafolios.com","format":"${!@1}${&*}@"},{"firstName":"Aaron","middleName":"","lastName":"Freeman","domain":"shiphawk.com","email":"aaron@shiphawk.com","format":"${!@}@"},{"firstName":"Patrick","middleName":"","lastName":"Hereford","domain":"forwardfinancing.com","email":"phereford@forwardfinancing.com","format":"${!@1}${&*}@"},{"firstName":"Carl","middleName":"","lastName":"Couric","domain":"solerarx.com","email":"carl.c@solerarx.com","format":"${!@}.${!@1}@"},{"firstName":"Rodolfo","middleName":"","lastName":"Marrero","domain":"excelimpact.com","email":"rodolfo@excelimpact.com","format":"${!@}@"},{"firstName":"David","middleName":"","lastName":"Simon","domain":"growthplay.com","email":"dsimon@growthplay.com","format":"${!@1}${&*}@"},{"firstName":"Stephen","middleName":"","lastName":"McDermott","domain":"thepennyhoarder.com","email":"stephen@thepennyhoarder.com","format":"${!@}@"},{"firstName":"David","middleName":"","lastName":"Gausebeck","domain":"matterport.com","email":"dave@matterport.com","format":"${!@1}ave@"},{"firstName":"Paul","middleName":"","lastName":"Crockett","domain":"savilinx.com","email":"pcrockett@savilinx.com","format":"${!@1}${&*}@"},{"firstName":"Bill","middleName":"","lastName":"Lytle","domain":"techanax.com","email":"bill.lytle@techanax.com","format":"${!@}.${&*}@"},{"firstName":"Vikas","middleName":"","lastName":"Kapdoskar","domain":"sparinfosys.com","email":"vikas@sparinfosys.com","format":"${!@}@"},{"firstName":"Teresa","middleName":"","lastName":"James","domain":"globalization-partners.com","email":"tjames@globalization-partners.com","format":"${!@1}${&*}@"},{"firstName":"Imran","middleName":"","lastName":"Kazi","domain":"carvana.com","email":"imran.kazi@carvana.com","format":"${!@}.${&*}@"},{"firstName":"Rob","middleName":"","lastName":"Lounsbury","domain":"enhancedvets.com","email":"rlounsbury@enhancedvets.com","format":"${!@1}${&*}@"},{"firstName":"Dave","middleName":"","lastName":"Rowe","domain":"dealerinspire.com","email":"drowe@dealerinspire.com","format":"${!@1}${&*}@"},{"firstName":"Justin","middleName":"","lastName":"Hesley","domain":"na-alii.com","email":"jhesley@na-alii.com","format":"${!@1}${&*}@"},{"firstName":"Inna","middleName":"","lastName":"Rabin","domain":"mmlafleur.com","email":"inna.rabin@mmlafleur.com","format":"${!@}.${&*}@"},{"firstName":"Karine","middleName":"","lastName":"Wegrzynowicz","domain":"thetrackr.com","email":"karine@thetrackr.com","format":"${!@}@"},{"firstName":"Carlyle","middleName":"","lastName":"Davis","domain":"bytecubed.com","email":"carlyle.davis@bytecubed.com","format":"${!@}.${&*}@"},{"firstName":"Robert","middleName":"","lastName":"Reynolds","domain":"avant.com","email":"robert.reynolds@avant.com","format":"${!@}.${&*}@"},{"firstName":"Gregory","middleName":"","lastName":"Doermann","domain":"boomsourcing.com","email":"gdoermann@boomsourcing.com","format":"${!@1}${&*}@"},{"firstName":"Jason","middleName":"","lastName":"Swanson","domain":"swanleap.com","email":"jswanson@swanleap.com","format":"${!@1}${&*}@"},{"firstName":"David","middleName":"","lastName":"Harrison","domain":"samba.tv","email":"dave@samba.tv","format":"${!@1}ave@"},{"firstName":"Jon","middleName":"","lastName":"Brelig","domain":"infoscoutinc.com","email":"jon@infoscoutinc.com","format":"${!@}@"},{"firstName":"Eli","middleName":"","lastName":"Roberts","domain":"givingtons.com","email":"eli.roberts@givingtons.com","format":"${!@}.${&*}@"},{"firstName":"Jennifer","middleName":"","lastName":"Schwartz","domain":"associatedveterans.com","email":"jennifer.schwartz@associatedveterans.com","format":"${!@}.${&*}@"},{"firstName":"Carlos","middleName":"","lastName":"Correa","domain":"pantherspecialty.com","email":"ccorrea@pantherspecialty.com","format":"${!@1}${&*}@"},{"firstName":"Eddie","middleName":"","lastName":"Pina","domain":"gimbal.com","email":"eddie.pina@gimbal.com","format":"${!@}.${&*}@"},{"firstName":"Mike","middleName":"","lastName":"Giudice","domain":"momentumsolar.com","email":"mike@momentumsolar.com","format":"${!@}@"},{"firstName":"Pete","middleName":"","lastName":"Lombardo","domain":"symbia.com","email":"pete.lombardo@symbia.com","format":"${!@}.${&*}@"},{"firstName":"Christine","middleName":"","lastName":"Henderson","domain":"targetfmi.com","email":"chenderson@targetfmi.com","format":"${!@1}${&*}@"},{"firstName":"Alexander","middleName":"","lastName":"Yakunin","domain":"servicetitan.com","email":"ayakunin@servicetitan.com","format":"${!@1}${&*}@"},{"firstName":"David","middleName":"","lastName":"Smith","domain":"linuxacademy.com","email":"david@linuxacademy.com","format":"${!@}@"},{"firstName":"Gary","middleName":"","lastName":"Grubbs","domain":"home.anoviapayments.com","email":"garyg@anoviapayments.com","format":"${!@}${!@1}@anoviapayments.com"},{"firstName":"Donald","middleName":"","lastName":"Thein","domain":"powerhome.com","email":"dthein@powerhome.com","format":"${!@1}${&*}@"},{"firstName":"Leo","middleName":"","lastName":"Cheung","domain":"swellbottle.com","email":"lcheung@swellbottle.com","format":"${!@1}${&*}@"},{"firstName":"Chris","middleName":"","lastName":"Takakuwa","domain":"fabfitfun.com","email":"chris@fabfitfun.com","format":"${!@}@"},{"firstName":"Sreedhar","middleName":"","lastName":"Peddineni","domain":"gainsight.com","email":"speddineni@gainsight.com","format":"${!@1}${&*}@"},{"firstName":"Frank","middleName":"","lastName":"Tawil","domain":"kaizentechpartners.com","email":"frank@kaizentechpartners.com","format":"${!@}@"},{"firstName":"Jonathan","middleName":"","lastName":"Alexander","domain":"qasymphony.com","email":"jalexander@qasymphony.com","format":"${!@1}${&*}@"},{"firstName":"Steve","middleName":"","lastName":"Andrews","domain":"inoventures.com","email":"sandrews@inoventures.com","format":"${!@1}${&*}@"},{"firstName":"Mike","middleName":"","lastName":"Sandler","domain":"eligoenergy.com","email":"msandler@eligoenergy.com","format":"${!@1}${&*}@"},{"firstName":"Duc","middleName":"","lastName":"Chau","domain":"omaze.com","email":"duc@omaze.com","format":"${!@}@"},{"firstName":"John","middleName":"","lastName":"Schnipkoweit","domain":"choozle.com","email":"john@choozle.com","format":"${!@}@"},{"firstName":"Kevin","middleName":"","lastName":"Brand","domain":"popculture.com","email":"kevin@comicbook.com","format":"${!@}@comic${&*1}oo${!@1}.com"},{"firstName":"Chad","middleName":"","lastName":"Pfaff","domain":"vantagepointlogistics.com","email":"cpfaff@vantagepointlogistics.com","format":"${!@1}${&*}@"},{"firstName":"Lawrence","middleName":"","lastName":"Belchez","domain":"rubyhas.com","email":"lawrence@rubyhas.com","format":"${!@}@"},{"firstName":"Andy","middleName":"","lastName":"Drooker","domain":"peachcap.com","email":"andy.drooker@peachcap.com","format":"${!@}.${&*}@"}]; 
let formats = [
  FN + "@${domain}",
  FNF + LN +"@${domain}",
  LN + "@${domain}",
  FN + LN + "@${domain}",
  FN + "."+ LN +"@${domain}",
  FNF + "." + LN + "@${domain}",
  FN + LNF + "@${domain}",
  FN + "."+ LNF + "@${domain}",
  FNF + "."+ LNF + "@${domain}",
  FNF + LNF + "@${domain}",
  FN + "_" + LN + "@${domain}",
  FNF + "_"+ LN +"@${domain}"
];
let headers = ["firstName", "lastName", "domain", "email"];
let containsHeader;
$(document).ready(function(event) {
  document.getElementById('convertData').addEventListener('click', getEmailFormatList, false); 
});

/**
 *
 */
function getEmailFormatList() {
  if(list.length == 0) {
    $.ajax({
      url: "/data/emailformats.json",
      type: "GET",
      success: function(result) {
        list = result;
        upload();
      }
    });
  } else {
    upload();
  }
}
/**
 *
 */
function upload(evt) {    
  if(!browserSupportFileUpload()) {
    alert('The File APIs are not fully supported in this browser!');
  } else {
    var data = null;
    var file = document.getElementById('csvFile').files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
      data = $.csv.toArrays(event.target.result);
      if (data && data.length > 0) {
        formatEmail(data, $("#containsHeader").is(":checked"));
      } else {
        console.log("Error in importing file");
      } 
    };
    reader.onerror = function() {
      console.log('Unable to read ' + file.fileName);
    };
  }
}

/**
 *
 */
function browserSupportFileUpload() {
  var isCompatible = false;
  if(window.File && window.FileReader && window.FileList && window.Blob) {
   isCompatible = true;
  }
  return isCompatible;
}

/**
 *
 */
function formatEmail(data, containsHeader) {
  $.each(data, function(index, values) {
    if((containsHeader && index > 0) || !containsHeader) {
      if(Array.isArray(values)) {
        data[index] = getEmailForObject({
          firstName: headers.indexOf("firstName") ? values[headers.indexOf("firstName")] : values[0],
          lastName: headers.indexOf("lastName") ? values[headers.indexOf("lastName")] : values[1],
          domain: headers.indexOf("domain") ? values[headers.indexOf("domain")] : values[2]
        });
      } else {
        data[index] = getEmailForObject(values);
      }  
    } else {
      $.each(data[index], function(i, header) {
        headers[i] = formElementId(header);  
      });
    }
  });
  exportAsExcel("result.csv", data);
}

/**
 *
 */
function getEmailForObject(values) {
  var format = getTargetEmailFormat(values.domain);
  let firstName, lastName;
  if(values.firstName) {
    firstName = values.firstName.toLowerCase();
    format = format.replace(FN, firstName).replace(FNF, firstName[0]);
  }
  if(values.lastName) {
    lastName = values.lastName.toLowerCase();
    format = format.replace(LN, lastName).replace(LNF, lastName[0]);  
  }
  values.email = format;
  values.email = values.email + values.domain;
  console.log(values);
  return values;
}

/**
 *
 */
function getTargetEmailFormat(domain) {
let emailformat = "";
  $.each(list, function(index, email) {
    if(email.domain.toLowerCase() === domain.toLowerCase()) {
      emailformat = email.format;
      return false;
    }
  });
  return emailformat;
}

/**
 *
 */
function processRow(row) {
  var finalVal = '';
  for (var j = 0; j < headers.length; j++) {
    let innerValue = row[headers[j]];
    innerValue = (!innerValue || innerValue == '') ? '' : innerValue.toString();
    if (innerValue instanceof Date) {
      innerValue = row[j].toLocaleString();
    }
    var result = innerValue.replace(/\,/g, '\,').replace(/"/g, '""').replace(/\'/g,"''");
    if (result.search(/("|,|\n)/g) >= 0) {
      result = '"' + result + '"';
    }
    if (j > 0) {
      finalVal += ',';
    }
    finalVal += result;
  }
  return finalVal + '\n';
}
    
/**
 * Converts array to string 
 * @param fileName
 * @param list
 */
function exportAsExcel(fileName, list) {
  var csvFile = '\uFEFF';
  if(headers.indexOf("email") == -1) {
    headers.push("email");
  }
  for (var i = 0; i < list.length; i++) {
    csvFile += processRow(list[i]);
  }
  exportData(fileName, 'text/csv;charset=utf-8', csvFile);
}

/**
 * Appends table data to excel sheet and downlods the file
 * @param fileName
 * @param mimeType
 * @param data
 */
function exportData(fileName, mimeType, data) {
  if (fileName.length <= 0 || mimeType.length <= 0 || data.length <=0) {
    setMessage("error","Invalid parameters passed for export data");
  } else {
    var blob = new Blob([data], { type:  mimeType });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, fileName);
    } else {
      var link = document.createElement('a');
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style = 'visibility:hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
}

/**
 *
 *
 */
function getEmailFormatsForAll(data) {
  $.each(data, function(index, emaildetails) {
    data[index].format = getEmailFormatByEmail(emaildetails);
  });
  console.log(JSON.stringify(data));
}

function getEmailFormatByEmail(email) {
  if(email) {
    if(email.email) {
      var mailXDomain = email.email.split(email.domain.toLowerCase())[0];
      if(email.firstName) {
        mailXDomain = mailXDomain.replace(new RegExp(email.firstName, "i"), FN);
      }
      if(email.lastName) {
        mailXDomain = mailXDomain.replace(new RegExp(email.lastName, "i"), LN) 
      }
      if(email.firstName) {
        mailXDomain= mailXDomain.replace(new RegExp(email.firstName[0], "i"), FNF)
      }
      if(email.lastName) {
        mailXDomain = mailXDomain.replace(new RegExp(email.lastName[0], "i"), LNF)
      }
      return mailXDomain;
    }
  }
}

function formElementId(groupName) {
  var id = "";
  groupName = groupName.split(" ");
  if(groupName.length == 1) {
    return groupName[0];
  }
  $.each(groupName, function(index,value) {
    if(index == 0) {
      id = value.toLowerCase();
    } else {
      id += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    }
  });
  return id;
}