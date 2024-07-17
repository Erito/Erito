menghitungBMI = () => {
    const weight = document.getElementById("beratInput").value;
    const height = document.getElementById("tinggiInput").value;
    const male = document.getElementById("cowo").value;
    const female = document.getElementById("cewe").value;
    
    // INI VALIDASI
    if (weight === "" ||  height === ""){
        alert("Tolong masukan data dengan benar");
        return;
    }
   
 // rumus BMI
    let bmi = weight / (height / 100) ** 2;
    let result = bmi.toFixed(1);
    let category = " ";


    // JIKA BMI < 18.5 AKAN INPUT category, STYLE DARI DISPLAY "KURANG-BERAT" AKAN DI KELUARKAN DAN SISANYA DI NONE
    if (bmi < 18.5){
        category = "Kekurangan Berat Badan";
        document.getElementById("kurang-berat").style.display = "block";
        document.getElementById("normal-aja").style.display = "none";
        document.getElementById("kelebihan-berat").style.display = "none";
        document.getElementById("kegemukan-obesitas").style.display = "none";
    } 
    else if(bmi >= 18.5 && bmi <= 24.9){
        category = "Normal";
        document.getElementById("normal-aja").style.display = "block";
        document.getElementById("kurang-berat").style.display = "none";
        document.getElementById("kelebihan-berat").style.display = "none";
        document.getElementById("kegemukan-obesitas").style.display = "none";
    } 
    else if(bmi >= 25.0 && bmi <= 29.9){
        category = "Kelebihan Berat Badan";
        document.getElementById("kelebihan-berat").style.display = "block";
        document.getElementById("kurang-berat").style.display = "none";
        document.getElementById("normal-aja").style.display = "none";
        document.getElementById("kegemukan-obesitas").style.display = "none";
    }
    else if(bmi >= 30.0){
        category = "Obesitas";
        document.getElementById("kegemukan-obesitas").style.display = "block";
        document.getElementById("kurang-berat").style.display = "none";
        document.getElementById("normal-aja").style.display = "none";
        document.getElementById("kelebihan-berat").style.display = "none";
    }

    // UNTUK KELUARKAN INPUT DARI FUNCTION
    result += "<br>" + category;

    // display ke html
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.padding = "10px";
}


// ALERT BAHWA TOMBOL DOWNLOAD TIDAK BISA MENGUNDUH
downloadData = () => {
    alert("MAAF Belom bisa download DATA");
}

// RESET DATA
resetBMI = () => {
    alert("DATA AKAN DIHAPUS");
}