
function Adopt() {
    return (
      <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">SAHİPSİZ DOSTLARIMIZ İÇİN SICAK BİR YUVA</h4>
      
      <hr></hr>
      Kurallarımız:<ul>
  <li>Sahiplenecek kişinin 18 yaşını doldurmuş olması gerekir.</li>
  <li>Birimlerimize sahiplenme için uygun bir araçla gelmelisiniz.</li>
  <li>Sahiplenmeye gelirken yanınızda tasma veya taşıma kafesiniz olmalıdır.</li>
  <li>Sahiplenen evcil dostumuza bakamıyorsanız aldığınız birime geri bırakmanız zorunludur. Sokağa terk etmeyiniz!</li>
  <li>Köpek / kedi sahiplenecek kişinin T.C. kimlik fotokopisi,  beyanı ve sahiplenme tutanağı yeterlidir.</li>
   </ul>   
  
   
      
      <div className="container">
       <h4 >Dostumuzu Sahiplenmek İçin Lütfen Formu Doldurunuz</h4>
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
      </div>
    );
  }
  
  export default Adopt;
  