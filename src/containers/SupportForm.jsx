import React from 'react'
import SelectLine from '../components/SelectLine'
import InputLine from '../components/InputLine'
import TextAreaLine from '../components/TextAreaLine'
import { validateEmail, isEmpty } from '../utility/Util';


const reasons = [
    {value: '', label: 'Seleccione motivo'},
    {value: 'consulta', label: 'Consulta'},
    {value: 'reclamo', label: 'Reclamo'},
    {value: 'problema_App', label: 'Problema App'},
    {value: 'sugerencia', label: 'Sugerencia'},
];

 export default class SupportForm extends React.Component{
    state ={
        supportData:{
            email:'',
            reason:'',
            text:'',            
        }, 
        errors:{
            email:false,
            reason:false,
            text:false,
        }
    };    

    onChange =(name, event) => {
        const value = event.target.value;
        const supportData= Object.assign({},this.state.supportData);
        supportData[name]= value;
        this.setState({
            supportData
        });   
    }

    validateConfirmation = (value, compareValue) => {
        if (this.isEmpty(value)) {
          return false;
        }
    
        if (value !== compareValue) {
          return false;
        }
    
        return true;
      }
      
      doSendSupport = (event) => {
        const {
            email,
            reason,
            text,
        } = this.state.supportData;

        const emailError = !validateEmail(email);
        const reasonError = isEmpty(reason);
        const textError = isEmpty(text);

        this.setState({
            errors: {
              email: emailError,
              reason: reasonError,
              textError: textError,
            }
          });

        event.preventDefault();

    }   

    render (){
        const {
            email,
            reason,
            text,
        } =this.state.supportData;

        const {errors} = this.state;
      
        return (

            <section className="Support">
                <div className="ContentBx">
                    <div className="Form">
                        <InputLine 
                            className="InputBx" 
                            name="email" 
                            placeholder= "Correo Electronico"
                            type="text"
                            required={true}
                            onChange={this.onChange}
                            error={errors.email}
                            value={email}   />
                        <SelectLine
                            className="InputBx"
                            name="reason"
                            options={reasons}
                            required={true}
                            onChange={this.onChange}
                            error={errors.reason}
                            value={reason}                            
                            />
                        <TextAreaLine 
                            className="InputBx" 
                            rows="8" 
                            placeholder="Escriba el motivo"
                            onChange={this.onChange}
                            error={errors.text}
                            value={text}
                            />
                        <InputLine 
                            className="InputBx"                             
                            name="send"
                            value="Enviar" 
                            type="submit"/>
                    </div>
                </div>    
            </section>
        );
    }
}   



