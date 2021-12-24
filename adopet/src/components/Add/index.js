
function Add() {
    return (
      
      <div className="container">
      <form>
        
      <div className="form-group">
      <label htmlFor="exampleInputEmail1">Sahipsiz dostumuzun ismi</label>
      <input type="text" className="form-control" id="extext"  />
      </div>
      <div class="form-group">
      <label for="select1">Türü</label>
      <select class="form-control" id="select1">
        <option>Kedi</option>
        <option>Köpek</option>
        
      </select>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Cinsi</label>
        <input type="name" class="form-control" id="name"/>
      </div>
      <div class="form-group col-md-6">
        <label for="iname">Olduğu Aşılar</label>
        <input type="name" class="form-control" id="sname"/>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="age">Yaşı</label>
      <input type="number" className="form-control" id="age"  />
      </div>
      
      <div class="form-group">
      <label for="select">Cinsiyeti</label>
      <select class="form-control" id="select">
        <option>Dişi</option>
        <option>Erkek</option>
      </select>
    </div>
      <div class="form-group">
      <label for="select">Kısır Mı?</label>
      <select class="form-control" id="select">
        <option>Evet</option>
        <option>Hayır</option>
      </select>
    </div>
    
      
      <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">İsim</label>
        <input type="name" class="form-control" id="name"/>
      </div>
      <div class="form-group col-md-6">
        <label for="ina">Soyisim</label>
        <input type="name" class="form-control" id="sname"/>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Mail</label>
        <input type="mail" class="form-control" id="mail"/>
      </div>
      <div class="form-group col-md-6">
        <label for="phone">Telefon Numaranız</label>
        <input type="text" class="form-control" id="phone"/>
      </div>
    </div>
    <div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile" required/>
    <label class="custom-file-label" for="validatedCustomFile">Dostumuzun Resmini Yükleyin</label>
    
  </div>
    
      
      
      <button type="submit" className="btn btn-primary">GÖNDER</button>
      </form>
      </div>
    );
  }
  
  export default Add;
  