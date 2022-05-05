import React from 'react';
import { Link } from 'react-router-dom';

class ProductForm extends React.Component {

    constructor(props){
        super(props);
        this.handleSave = this.handleSave.bind(this)
        this.showErrors = this.showErrors.bind(this)

        this.state = {   
            title: '', 
            category: '', 
            materials: '', 
            price: '', 
            photoFile: null,
            photoUrl: null 
        }
    }

    update(field){  
        return (e) => this.setState({ [field]: e.target.value })
    }

    showErrors(field) {
        let error_msg = this.props.errors[field.toLowerCase().replace(" ", "_")]
        
        if (error_msg) {
            error_msg = `${field} ${error_msg[0]}`
        }
        return (<div className="errors"> {error_msg} </div>);  
    }

    uploadPhoto(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if(file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSave(e) {
        e.preventDefault()
        this.props.clearProductErrors()
        let media_type = `${this.state.category} : ${this.state.materials}`

        let formData = new FormData();
        formData.append("product[title]", this.state.title)
        formData.append("product[price]", this.state.price)
        formData.append("product[media_type]", media_type)

        if(this.state.photoFile){
            formData.append("product[photo]", this.state.photoFile)
        }

        if(!this.props.productId){
            this.props.createProduct(formData)
        } else {
            formData.append("product[id]", this.props.productId)
            this.props.updateProduct(formData)
        }
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productId)
            .then(() => { 
                this.setState({
                    title: this.props.product.title || '',
                    category: this.props.product.category || '',
                    materials: this.props.product.materials || '',
                    price: this.props.product.price || '',
                    photoFile: this.props.product.photoFile || null,
                    photoUrl: this.props.product.photoUrl || null
                })
            })
    }

    render () {
        let preview = null
        if(this.state.photoUrl) {
            preview = ( <li className="product-listing-item">
                            <div>Image Preview</div>
                            <img src={this.state.photoUrl}></img>
                        </li> )
        }

        return (
            <div id="product-listing">
                <div id="product-listing-title">Add a New Listing</div>
                
                <ul>
                    <li>Photo</li>
                    <li className="product-listing-item">
                        <div>Upload a picture of your product</div>
                        <input type="file" 
                               onChange={this.uploadPhoto.bind(this)}/>
                    </li>
                    <div className="err-div"> {this.showErrors('Photo')} </div>
                    {preview}
                </ul>

                <ul>
                    <li>Listing details</li>
                    
                    <li className="product-listing-item">
                        <div>Title</div>
                        <input type="text" 
                                value={this.state.title}
                                onChange={this.update('title')} />
                    </li>
                    <div className="err-div"> {this.showErrors('Title')} </div>

                    <li className="product-listing-item">
                        <div> Media Type </div>  
                        <form onChange={this.update('category')}>           
                            <input type="checkbox" name="mix" value="mixed-media"/>     
                            <label htmlFor="mix">Mixed-Media</label>             
                                    
                            <input type="checkbox" name="draw" value="drawing"/>       
                            <label htmlFor="draw">Drawing</label>           
                                
                            <input type="checkbox" name="paint" value="painting"/>     
                            <label htmlFor="paint">Painting</label>               
                            
                            <input type="checkbox" name="floral" value="flowers"/>   
                            <label htmlFor="floral">Flowers</label>    
                        </form>   
                    </li>
                    <div className="err-div"> {this.showErrors('Media Type')} </div>
                   
                    <li className="product-listing-item">
                        <div>Materials</div>
                        <input type="text" 
                                value={this.state.materials}
                                onChange={this.update('materials')}/>
                    </li>
                    <div className="err-div"></div>
                </ul>

                <ul>
                    <li>Pricing</li>
                    <li className="product-listing-item"> 
                        <div>Price</div> 
                        <div>$<input type="text" 
                                   value={this.state.price}
                                   onChange={this.update('price')} />.00</div>
                        
                    </li>
                    <div className="err-div"> {this.showErrors('Price')} </div>
                </ul>

                <Link to="/shop" className="button black small">
                    Cancel
                </Link>
                <Link to="/shop" 
                      onClick={this.handleSave} 
                      className="button black small">
                    Save
                </Link>
            </div>
        )
    }   
}

export default ProductForm;