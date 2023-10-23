import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup';
export default function NewFormValidation()
{
    return(
        <div>
            <h2>REGISTER FORM</h2>
            <Formik initialValues={
                {
                    userName:'',
                    Email:'',
                    age:'',
                    city:''

                }
            }
            validationSchema={
                
                    yup.object({
                        userName:yup.string('should be character only').min(4,'name is too short').max(10,'name is too long').required('can not be empty'),
                        
                        Email:yup.string().required('cannot be empty').email('invalid emial'),
                        age:yup.number('number only').required('cant be empty').max(100,'cannot be mre then 100').min(10,'cannot be less then 10'),
                        city:yup.string()

                    })
                
            }
            onSubmit={
                values=>{
                    alert(JSON.stringify(values));
                }
            }
            >
                {
                    
                        <Form>
                            {
                                <div>
                                    <dl>
                                   <dt>USER NAME</dt>
                                   <dd><Field type="text " name="userName"></Field></dd>
                                   <dd className="emsg"><ErrorMessage name="userName"></ErrorMessage></dd>
                                   <dt>MAIL</dt>
                                   <dd><Field type="text " name="Email"></Field></dd>
                                   <dd className="emsg"><ErrorMessage name="Email"></ErrorMessage></dd>
                                   <dt>AGE</dt>
                                   <dd><Field type="number" name="age"></Field></dd>
                                   <dd className="emsg"><ErrorMessage name="age"></ErrorMessage></dd>
                                   <dt>City</dt>
                                   <dd >
                                   <Field as="select" name="city">
                                    <option>DELHI</option>
                                    <option>ODISHA</option>
                                   </Field>

                                   </dd>
                                   </dl>
                                   <button>REGISTER</button>

                                </div>
                            }

                        </Form>
                    
                }
            </Formik>

        </div>
    )
}