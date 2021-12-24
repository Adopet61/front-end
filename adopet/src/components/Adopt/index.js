
function Adopt() {
    return (
      
      <div className="container">
      <form>
      <div className="form-group">
      <label htmlFor="name">İsim</label>
      <input type="name" className="form-control" id="name"  />
      </div>
      
      <div className="form-group">
      <label htmlFor="sname">Soyisim</label>
      <input type="text" className="form-control" id="sname"  />
      </div>
      <div className="form-group">
      <label htmlFor="phone">Telefon Numaranız</label>
      <input type="phonenumber" className="form-control" id="phone"  />
      </div>
      <div className="form-group">
      <label htmlFor="email">E-mail</label>
      <input type="email" className="form-control" id="email"  />
      </div>
      <div class="form-group">
      <label for="havepet">Daha önce hiç evcil hayvanınız oldu mu?</label>
      <select class="form-control" id="havepet">
        <option>Evet</option>
        <option>Hayır</option>
       
      </select>
    </div>
      <div class="form-group">
      <label for="textarea">Neden Hayvan Sahiplenmek İstiyorsunuz?</label>
      <textarea class="form-control" id="textarea" rows="3"></textarea>
    </div>
    
      
      
      <button type="submit" className="btn btn-primary">GÖNDER</button>
      </form>
      </div>
    );
  }
  
  export default Adopt;
  