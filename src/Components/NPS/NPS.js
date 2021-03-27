import React from 'react'
import { Link } from 'react-router-dom'

import './NPS.css'

export default function NPS(){
    const handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };
    
    function selectOnlyThis(id){
        var myCheckbox = document.getElementsByName("myCheckbox");
        Array.prototype.forEach.call(myCheckbox,function(el){
            el.checked = false;
        });
        id.checked = true;
      }

    return (
    <div className="flex-out">
        <div className="flex-in">
            <div className="flex">
            <h1 className="main-title">Avalie Nosso Serviço</h1>
            </div>
        <div className="flex-title">
            <p className="f-t">Ruim</p>
            <p className="f-t">Médio</p>
            <p className="f-t">Bom</p>
        </div>
        <div className="wrap-emoji">
            <div>
        <img height="100" width="100" src="https://cdn.discordapp.com/attachments/379715361148370946/825369561632473118/Very_sad_emoji_icon_png_grande.png" />
        </div>
        <div> <img height="105" width="100" src="https://cdn.discordapp.com/attachments/379715361148370946/825373726824464414/neutral-face-removebg-preview.png" /></div>
       
        <div><img height="105" width="100" src="https://cdn.discordapp.com/attachments/379715361148370946/825373122437840956/emoji-emojis-emoticonos-emoticono-feliz-happy-reir-happy-face-emoji-115630245952vdezktgff-removebg-p.png" /></div>
        </div>
        <div className="flex-radio">
        <input
          id="windows"
          value="windows"
          name="platform"
          type="radio"
          onChange={() => handleChange}
        />
        <input
          id="mac"
          value="mac"
          name="platform"
          type="radio"
          onChange={() => handleChange}
        />
        <input
          id="linux"
          value="linux"
          name="platform"
          type="radio"
          onChange={() => handleChange}
        />
        </div>
        <div className="flex mg-top">
        <button className="button" type="submit">
          <Link to={{ pathname: "/Submit"}}> Finalizar</Link>
        </button>
        </div>
        </div>
    </div>)
}