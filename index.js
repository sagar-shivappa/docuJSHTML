console.log('sagar');
let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
       flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png',
      capital: "Brasilia"
    }
  ]
  
  const display2=document.createElement('div');
  display2.setAttribute('class','displayMode1');
  
  countriesInfo.forEach(countriesInfo=>{ 
    const display=document.createElement('div');
    display.setAttribute('class','displayMode');
    
    
    display.innerHTML=`
    <div class="card">
      <img class="flag" src=${countriesInfo.flag}>
      <div class="textArea">
        <h2>${countriesInfo.name}</h2>
        <p>POPULATION: ${countriesInfo.population}</p>
        <p>REGION: ${countriesInfo.region} </p>
        <p>CAPITAL: ${countriesInfo.capital}</p>
      </div>
    </div>
    `
    display2.append(display);
    
    
  });
  
  
  
  document.body.append(display2)
  
  // const flag= document.createElement('img');
  // flag.setAttribute('class','flag');
  // flag.setAttribute('src',${countryArray.img});
  
  // const textBody=document.createElement('div');
  // textBody.innerHTML=`
  //   <h2>GERMANY</h2>
  //   <p>POPULATION: 8,00,00,000</p>
  //   <p>REGION: EUROPE </p>
  //   <p>CAPITAL: BERLIN</p>
  // `;
  // textBody.setAttribute('style',"padding:10px")
  
  // parentCard.append(flag,textBody);
  
  