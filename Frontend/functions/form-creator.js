export let CreateForm = (buyerFieldHeader, buyerFields, 
                        sellerFieldHeader, sellerFields, 
                        objectFieldHeader, objectFields, formid) => {
    let form = document.createElement("form");
    form.id = formid;

    let buyerHeader = document.createElement("p")
    buyerHeader.textContent = buyerFieldHeader;
    for (let fieldName of buyerFields) {
        let label = document.createElement("label");
        label.for = fieldName;
        label.id = fieldName+"-label";
        label.classList.add("labels");
        
        let field = document.createElement("input");
        field.id = fieldName;
        field.name = fieldName;

        let br1 = document.createElement("br")
        let br = document.createElement("br");

        form.appendChild(label);
        form.appendChild(br1);
        form.appendChild(field);
        form.appendChild(br);
    }

    let sellerHeader = document.createElement("p")
    sellerHeader.textContent = sellerFieldHeader;
    for (let fieldName of sellerFields) {
        let label = document.createElement("label");
        label.for = fieldName;
        label.id = fieldName+"-label";
        label.classList.add("labels");
        
        let field = document.createElement("input");
        field.id = fieldName;
        field.name = fieldName;
        
        let br1 = document.createElement("br")
        let br = document.createElement("br");

        form.appendChild(label);
        form.appendChild(br1);
        form.appendChild(field);
        form.appendChild(br);
    }

    let objectHeader = document.createElement("p")
    objectHeader.textContent = objectFieldHeader;
    for (let fieldName of objectFields) {
        let label = document.createElement("label");
        label.for = fieldName;
        label.id = fieldName+"-label";
        label.classList.add("labels");
        
        let field = document.createElement("input");
        field.id = fieldName;
        field.name = fieldName;
        
        let br1 = document.createElement("br");
        let br = document.createElement("br");

        form.appendChild(label);
        form.appendChild(br1);
        form.appendChild(field);
        form.appendChild(br);
    }

    let submit = document.createElement("input");
    submit.type = "submit";
    submit.textContent = "Generera kontrakt";
    submit.id = "submit";

    form.appendChild(submit);

    return form;
  };
  
  export let SetLabel = (labelId, input) => {
      let label = document.getElementById(labelId);
      label.innerHTML = input;
  }