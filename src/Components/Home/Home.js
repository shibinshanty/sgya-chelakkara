import React from 'react'

import './Home.css'
function Home() {
  return (
    <div className='body border border-warning rounded p-4 shadow-lg font'>
    <div className='row'>
      <h1 className="col-12 text-center my-4 display-6 display-md-4 display-lg-3 p-3 p-md-5 border border-warning rounded shadow-lg head">
        <span className="fw-bolder">St.</span> ജോർജ്ജ് യൂത്ത് അസോസിയേഷൻ ചേലക്കര
      </h1>
      <div className="col-12 col-md-6 mt-3 text-center ">
        <img 
          src='./photos/sgya_background.png' 
          alt='' 
          className='img' 
          style={{ width: '100%', height: 'auto', maxWidth: '800px' }} 
        />
      </div>
      <div className='col-12 col-md-6 mt-3 text-center text-md-start image-margin'>
        <span>
          അബുദാബി: യുഎഇയിലെ ഭാഗ്യപരീക്ഷണങ്ങളില്‍ വീണ്ടും മലയാളി പ്രവാസികള്‍ക്ക് വിജയം. 
          ദുബായ് ഡ്യൂട്ടി ഫ്രീ മില്ലേനിയം മില്യണയര്‍, ഫൈനെസ്റ്റ് സര്‍പ്രൈസ് നറുക്കെടുപ്പില്‍ 
          യുഎഇയിലെ മലയാളി പ്രവാസികളുടെ രണ്ട് സംഘങ്ങള്‍ ഒരു മില്യണ്‍ ഡോളര്‍ വീതം 
          സമ്മാനം നേടി. എട്ട് കോടിയിലേറെ രൂപയാണ് ഇരുസംഘങ്ങള്‍ക്കും ലഭിക്കുക. 
          ദുബായ് ഡ്യൂട്ടി ഫ്രീ മില്ലേനിയം മില്യണയറില്‍ അബ്ദുള്‍ അസീസ് എന്ന പ്രവാസിയെ 
          തേടിയാണ് ഭാഗ്യമെത്തിയത്. അബുദാബി: യുഎഇയിലെ ഭാഗ്യപരീക്ഷണങ്ങളില്‍ വീണ്ടും 
          മലയാളി പ്രവാസികള്‍ക്ക് വിജയം...
        </span>
      </div>
    </div>
  </div>
  
  

  )
}

export default Home