import React from 'react';

class ProductForm extends React.Component {

    constructor(props){
        super(props);
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
                            <input type="text" />
                        </label>

                        <label className="product-form-item">  
                            <div>Category</div>
                            <select>                        
                                <option value="mixed-media">mixed-media</option>
                                <option value="drawing">drawing</option>
                                <option value="painting">painting</option>
                                <option value="flowers">flowers</option>
                            </select>
                        </label>

                        <label className="product-form-item"> 
                            <div>Materials</div>
                            <input type="text" />
                        </label>
                    </div>

                    <div className="box">
                        <div className="subheading">Pricing</div>
                        <label className="product-form-item"> 
                            <div>Price</div> 
                            <input type="text" />
                        </label>
                    </div>
                    <button className="button black small">Save</button>
                </form>
            </div>
        )
    }
    
}

export default ProductForm;