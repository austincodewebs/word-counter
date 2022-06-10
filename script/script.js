var inputArea = document.querySelectorAll("textarea")[0];
      var wordCount = document.querySelector("#word");
      var characterCount = document.querySelector("#character");
          
          inputArea.addEventListener("input", () =>{
            
            console.clear();
          characterCount.innerHTML = inputArea.value.length;
          
          let words = inputArea.value.trim();
           wordCount.innerHTML = inputArea.value.split(/\s+/).filter((item) => item).length;
          });
          