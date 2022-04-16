import React from 'react';

class ProductForm extends React.Component {

    constructor(props){
        super(props);
        this.save = this.save.bind(this)
        this.state = { title: '', category: '', materials:'', price: ''}
        this.filterErrors = this.filterErrors.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
        console.log(props)
    }

    update(field){
     
        return e => this.setState({ [field]: e.target.value })
    }

    filterErrors(field) {
        for(let i = 0; i < this.props.errors.length; i++) {
            if(this.props.errors[i].includes(field)){
                return this.props.errors[i]
            }
        }

        return ""
    }

    renderErrors(errorType) {
        return (
            <div className="errors"> {this.filterErrors(errorType)} </div>
        );
    }

    save() {
        e.preventDefault()
        let product = { 
            title: this.state.title, 
            price: this.state.price, 
            materials: `${this.state.category}:${this.state.materials}`,
            artist_id: this.props.currentUser.id
        }

        this.props.createProduct(product)
    }

    render () {
        return (
            <div className="product-form-container">
                <div className="heading">Add a New Listing</div>
                <form className="product-form"> 
                    <div className="box">
                        <div className="subheading">Photo</div>
                    </div>

                    <div className="box">
                        <div className="subheading">Listing details</div>
                        <label className="product-form-item"> 
                            <div>Title</div>
                            <input type="text" 
                                   value={this.state.title}
                                   onChange={this.update('title')} />
                        </label>
                        <div className="err-div">
                            {this.renderErrors(['title'])}
                        </div>

                        <label className="product-form-item">  
                            <div>Category</div>
                            <select onChange={this.update('category')}>                        
                                <option value="mixed-media">mixed-media</option>
                                <option value="drawing">drawing</option>
                                <option value="painting">painting</option>
                                <option value="flowers">flowers</option>
                            </select>
                        </label>

                        <label className="product-form-item"> 
                            <div>Materials</div>
                            <input type="text" 
                                   value={this.state.title}
                                   onChange={this.update('materials')}/>
                        </label>
                        <div className="err-div">
                            {this.renderErrors(['materials'])}
                        </div>
                    </div>

                    <div className="box">
                        <div className="subheading">Pricing</div>
                        <label className="product-form-item"> 
                            <div>Price</div> 
                            <input type="text" 
                                   value={this.state.title}
                                   onChange={this.update('price')}/>
                        </label>
                        <div className="err-div">
                            {this.renderErrors(['price'])}
                        </div>
                    </div>
                    <button onClick={this.save} className="button black small">
                        Save
                    </button>
                </form>
            </div>
        )
    }
    
}

export default ProductForm;