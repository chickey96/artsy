import React from 'react';

class ProductForm extends React.Component {

    constructor(props){
        super(props);
        this.handleSave = this.handleSave.bind(this)
        this.state = { title: '', category: '', materials:'', price: ''}
        this.filterErrors = this.filterErrors.bind(this)
        this.showErrors = this.showErrors.bind(this)
    }

    update(field){  
        if(field == 'category' && this.state.category){
            return (e) => this.setState({ 
                [field]: `${this.state.category}/${e.target.value}` })
        } 
        
        return (e) => this.setState({ [field]: e.target.value })
    }

    filterErrors(field) {
        for(let i = 0; i < this.props.errors.length; i++) {
            if(this.props.errors[i].includes(field)){
                return this.props.errors[i]
            }
        }

        return ""
    }

    showErrors(errorType) {
        return (
            <div className="errors"> {this.filterErrors(errorType)} </div>
        );
    }

    handleSave(e) {
        e.preventDefault()
        this.props.clearProductErrors()
        let media_type = this.state.category

        if(this.state.materials) {
            media_type += `:${this.state.materials}`
        }

        let product = { 
            title: this.state.title, 
            price: this.state.price, 
            media_type: media_type,
        }

        this.props.createProduct(product)
    }

    render () {
        return (
            <div id="product-listing">
                <div id="product-listing-title">Add a New Listing</div>
                
                <ul>
                    <li>Photo</li>
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
                        <div> Media-Type </div>  
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
                    <div className="err-div"> {this.showErrors('Media')} </div>
                   
                    <li className="product-listing-item">
                        <div>Materials</div>
                        <input type="text" 
                                value={this.state.title}
                                onChange={this.update('materials')}/>
                    </li>
                    <div className="err-div"></div>
                </ul>

                <ul>
                    <li>Pricing</li>
                    <li className="product-listing-item"> 
                        <div>Price</div> 
                        <div>$<input type="text" 
                                   value={this.state.title}
                                   onChange={this.update('price')} />.00</div>
                        
                    </li>
                    <div className="err-div"> {this.showErrors('Price')} </div>
                </ul>

                <button onClick={this.handleSave} className="button black small">
                    Save
                </button>
            </div>
        )
    }
    
}

export default ProductForm;