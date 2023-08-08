let maça = {
    tipo: "fruta"
  };
  let banana = {
    tipo: "fruta"
  };
  let beterraba = {
    tipo: "legume"
  };
  let alface = {
    tipo: "legume"
  };
  
  let contador_legume = 0;
  let contador_fruta = 0;
  
  const comidas = [maça, banana, beterraba, alface];
  
  function conta_tipo(item){
    if (item.tipo == "fruta"){
      contador_fruta += 1;
    } 
    if (item.tipo == "legume"){
      contador_legume += 1;
    }
  };
  
  comidas.forEach(conta_tipo);
  
  console.log("Total de legumes:", contador_legume);
  console.log("Total de frutas:", contador_fruta);