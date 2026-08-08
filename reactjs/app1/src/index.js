import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
const Ul = styled.ul`
    background-color:cyan;
    padding:10px;
    border:1px solid black;
    width:50%;
    list-style-type:none;
`;
const Li = styled.li`
    text-transform:uppercase;
    border-bottom:1px solid blue;
    line-height:200%;
    font-weight:bold
`;
function Country() {
    return (<div>
        <Ul>
            <Li>Afghanistan</Li>
            <Li>Albania</Li>
            <Li>Algeria</Li>
            <Li>Andorra</Li>
            <Li>Angola</Li>
            <Li>Antigua and Barbuda</Li>
            <Li>Argentina</Li>
            <Li>Armenia</Li>
            <Li>AustraLia</Li>
            <Li>Austria</Li>
            <Li>Azerbaijan</Li>
            <Li>Bahamas</Li>
            <Li>Bahrain</Li>
            <Li>Bangladesh</Li>
            <Li>Barbados</Li>
            <Li>Belarus</Li>
            <Li>Belgium</Li>
            <Li>BeLize</Li>
            <Li>Benin</Li>
            <Li>Bhutan</Li>
            <Li>BoLivia</Li>
            <Li>Bosnia and Herzegovina</Li>
            <Li>Botswana</Li>
            <Li>Brazil</Li>
            <Li>Brunei</Li>
            <Li>Bulgaria</Li>
            <Li>Burkina Faso</Li>
            <Li>Burundi</Li>
            <Li>Cabo Verde</Li>
            <Li>Cambodia</Li>
            <Li>Cameroon</Li>
            <Li>Canada</Li>
            <Li>Central African RepubLic</Li>
            <Li>Chad</Li>
            <Li>Chile</Li>
            <Li>China</Li>
            <Li>Colombia</Li>
            <Li>Comoros</Li>
            <Li>Congo (Congo-Brazzaville)</Li>
            <Li>Costa Rica</Li>
            <Li>Croatia</Li>
            <Li>Cuba</Li>
            <Li>Cyprus</Li>
            <Li>Czechia (Czech RepubLic)</Li>
            <Li>Côte d'Ivoire</Li>
            <Li>Democratic RepubLic of the Congo</Li>
            <Li>Denmark</Li>
            <Li>Djibouti</Li>
            <Li>Dominica</Li>
            <Li>Dominican RepubLic</Li>
            <Li>Ecuador</Li>
            <Li>Egypt</Li>
            <Li>El Salvador</Li>
            <Li>Equatorial Guinea</Li>
            <Li>Eritrea</Li>
            <Li>Estonia</Li>
            <Li>Eswatini</Li>
            <Li>Ethiopia</Li>
            <Li>Fiji</Li>
            <Li>Finland</Li>
            <Li>France</Li>
            <Li>Gabon</Li>
            <Li>Gambia</Li>
            <Li>Georgia</Li>
            <Li>Germany</Li>
            <Li>Ghana</Li>
            <Li>Greece</Li>
            <Li>Grenada</Li>
            <Li>Guatemala</Li>
            <Li>Guinea</Li>
            <Li>Guinea-Bissau</Li>
            <Li>Guyana</Li>
            <Li>Haiti</Li>
            <Li>Holy See</Li>
            <Li>Honduras</Li>
            <Li>Hungary</Li>
            <Li>Iceland</Li>
            <Li>India</Li>
            <Li>Indonesia</Li>
            <Li>Iran</Li>
            <Li>Iraq</Li>
            <Li>Ireland</Li>
            <Li>Israel</Li>
            <Li>Italy</Li>
            <Li>Jamaica</Li>
            <Li>Japan</Li>
            <Li>Jordan</Li>
            <Li>Kazakhstan</Li>
            <Li>Kenya</Li>
            <Li>Kiribati</Li>
            <Li>Kuwait</Li>
            <Li>Kyrgyzstan</Li>
            <Li>Laos</Li>
            <Li>Latvia</Li>
            <Li>Lebanon</Li>
            <Li>Lesotho</Li>
            <Li>Liberia</Li>
            <Li>Libya</Li>
            <Li>Liechtenstein</Li>
            <Li>Lithuania</Li>
            <Li>Luxembourg</Li>
            <Li>Madagascar</Li>
            <Li>Malawi</Li>
            <Li>Malaysia</Li>
            <Li>Maldives</Li>
            <Li>MaLi</Li>
            <Li>Malta</Li>
            <Li>Marshall Islands</Li>
            <Li>Mauritania</Li>
            <Li>Mauritius</Li>
            <Li>Mexico</Li>
            <Li>Micronesia</Li>
            <Li>Moldova</Li>
            <Li>Monaco</Li>
            <Li>MongoLia</Li>
            <Li>Montenegro</Li>
            <Li>Morocco</Li>
            <Li>Mozambique</Li>
            <Li>Myanmar (formerly Burma)</Li>
            <Li>Namibia</Li>
            <Li>Nauru</Li>
            <Li>Nepal</Li>
            <Li>Netherlands</Li>
            <Li>New Zealand</Li>
            <Li>Nicaragua</Li>
            <Li>Niger</Li>
            <Li>Nigeria</Li>
            <Li>North Korea</Li>
            <Li>North Macedonia</Li>
            <Li>Norway</Li>
            <Li>Oman</Li>
            <Li>Pakistan</Li>
            <Li>Palau</Li>
            <Li>Palestine State</Li>
            <Li>Panama</Li>
            <Li>Papua New Guinea</Li>
            <Li>Paraguay</Li>
            <Li>Peru</Li>
            <Li>PhiLippines</Li>
            <Li>Poland</Li>
            <Li>Portugal</Li>
            <Li>Qatar</Li>
            <Li>Romania</Li>
            <Li>Russia</Li>
            <Li>Rwanda</Li>
            <Li>Saint Kitts and Nevis</Li>
            <Li>Saint Lucia</Li>
            <Li>Saint Vincent and the Grenadines</Li>
            <Li>Samoa</Li>
            <Li>San Marino</Li>
            <Li>Sao Tome and Principe</Li>
            <Li>Saudi Arabia</Li>
            <Li>Senegal</Li>
            <Li>Serbia</Li>
            <Li>Seychelles</Li>
            <Li>Sierra Leone</Li>
            <Li>Singapore</Li>
            <Li>Slovakia</Li>
            <Li>Slovenia</Li>
            <Li>Solomon Islands</Li>
            <Li>SomaLia</Li>
            <Li>South Africa</Li>
            <Li>South Korea</Li>
            <Li>South Sudan</Li>
            <Li>Spain</Li>
            <Li>Sri Lanka</Li>
            <Li>Sudan</Li>
            <Li>Suriname</Li>
            <Li>Sweden</Li>
            <Li>Switzerland</Li>
            <Li>Syria</Li>
            <Li>Tajikistan</Li>
            <Li>Tanzania</Li>
            <Li>Thailand</Li>
            <Li>Timor-Leste</Li>
            <Li>Togo</Li>
            <Li>Tonga</Li>
            <Li>Trinidad and Tobago</Li>
            <Li>Tunisia</Li>
            <Li>Turkey</Li>
            <Li>Turkmenistan</Li>
            <Li>Tuvalu</Li>
            <Li>Uganda</Li>
            <Li>Ukraine</Li>
            <Li>United Arab Emirates</Li>
            <Li>United Kingdom</Li>
            <Li>United States of America</Li>
            <Li>Uruguay</Li>
            <Li>Uzbekistan</Li>
            <Li>Vanuatu</Li>
            <Li>Venezuela</Li>
            <Li>Vietnam</Li>
            <Li>Yemen</Li>
            <Li>Zambia</Li>
            <Li>Zimbabwe</Li>
        </Ul>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Country />)
