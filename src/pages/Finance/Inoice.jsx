import React, { useState } from "react";
import "./invoice.css";
const Invoice = () => {
  const [Des, setDes] = useState();
  const [Quantity, setQuantity] = useState();
  const [Price, setPrice] = useState();
  function AddToInvoice(e) {
    e.preventDefault();
    const container=document.getElementById("tData");
    const Total = Price * Quantity;
    // if(Des===""||Quantity===""||Price===""){
    //     alert('field are missing');
    // }else{
        container.innerHTML += `
        <tr className="bg-white border-b">
          <td>${Des} </td>
          <td className="text-sm border text-gray-900 font-light px-6 py-4 whitespace-nowrap">${Quantity}</td>
          <td className="text-sm border text-gray-900 font-light px-6 py-4 whitespace-nowrap">${Price}</td>
          <td className="text-sm border text-gray-900 font-light px-6 py-4 whitespace-nowrap">${Total}</td>
        </tr>`;
    // }
    
  }
  return (
    <div className="">
      <div className="">
        <form className="flex mx-auto m-3 w-3/4" onSubmit={AddToInvoice}>
          <div className="flex-1 mx-1">
            <input
              type="text"
              id="itemDes"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Item Description"
              value={Des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
              
            />
          </div>
          <div className="flex-2 mx-1">
            <input
              type="number"
              id="quantity"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantity"
              value={Quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              
            />
          </div>
          <div className="flex-2 mx-1">
            <input
              type="number"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              value={Price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              
            />
          </div>
          <div className="flex-3 mx-1">
          <input
              type="submit"
              id="price"
              class="bg-blue-500 text-white text-sm rounded-lg focus:border-blue-500 p-2.5 dark:border-gray-600 hover:bg-blue-600"
              value="Add Item"
              
            />
          </div>
        </form>
      </div>
      <div
        className=" font-serif w-1/2 text-stone-900 rounded-lg bg-gray-100 mx-auto"
        size=""
      >
        <div className="p-5">
          <section className="flex p-2">
            <div className="flex-1">
              <img src="" alt="CompanyLogo" className="" />
            </div>
            <div className="flex-1 right-0">
              <div className="font-bold">
                <p>Invoice</p>
              </div>
              <div className="font-light">
                <p>
                  Invoice No. <span>XXXX</span>
                </p>
              </div>
            </div>
          </section>
          <hr />

          <section className="m-auto p1">
            <div className="flex">
              <div className="flex-1">
                <p>Supplier,</p>
                <h2 className="m-1 text-sky-500 text-2xl">Your Store Name</h2>
                <p className="font-light">
                  {" "}
                  777 Brockton Avenue, <br /> Abington MA 2351, <br />
                  Vestavia Hills AL{" "}
                </p>
                <div className="font-light">TXN: XXXXXXX</div>
              </div>
              <div className="flex-1">
                <p>Client,</p>
                <h2 className=" m-1 text-sky-500 text-2xl">Sabur Ali</h2>
                <p className="">
                  777 Brockton Avenue, <br /> Abington MA 2351, <br />
                  Vestavia Hills AL{" "}
                </p>
                <div className="font-light">TXN: XXXXXXX</div>
              </div>
            </div>
            <hr />
            <div className="m-auto">
              <div className="">
                <p>
                  Payment Method: <span className="font-light">bKash</span>
                </p>
                <p>
                  Order Number: <span className="font-light">#868</span>
                </p>
              </div>
              <div className="">
                <p>
                  Deliver Date: <span className="font-light">10-04.2021</span>
                </p>
              </div>
            </div>
          </section>

          <hr />

          <section className="m-auto my-2 p1">
            <table className="min-w-full border-collapse rounded-lg text-center">
              <thead className="border-b bg-gray-500">
                <tr>
                  <th
                    scope="col"
                    className="text-sm border font-medium text-white px-6 py-4"
                  >
                    Item Description
                  </th>
                  <th
                    scope="col"
                    className="text-sm border font-medium text-white px-6 py-4"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-sm border font-medium text-white px-6 py-4"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm border font-medium text-white px-6 py-4"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody id="tData" className="bg-white rounded-lg"></tbody>
            </table>
          </section>
          <hr />
          <section className="m-auto flex p1">
            <div className="flex-1">
              <p className=""> Note: </p>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                delectus, adipisci vero est dolore praesentium.
              </p>
            </div>
            <div className="flex-1">
              <table className="">
                <tr>
                  <td>Sub Total:</td>
                  <td>800$</td>
                </tr>
                <tr>
                  <td>Tax:</td>
                  <td>15$</td>
                </tr>
                <tr>
                  <td>Deliver:</td>
                  <td>10$</td>
                </tr>
                <tfoot>
                  <tr>
                    <td>Total:</td>
                    <td>825$</td>
                  </tr>
                </tfoot>
              </table>

              {/* <!-- Signature --> */}
              <div className="">
                <img src="" className="" alt="" />
                <p className="font-light"> Director Signature </p>
              </div>
            </div>
          </section>
          <hr />

          <footer className=" m-auto p-2">
            <hr />
            <div className="font-light">
              <span className="">
                <i className=""></i>
                <span>0123456789</span>
              </span>
              <span className="font-light">
                <i className=""></i>
                <span>me@saburali.com</span>
              </span>
              <span className="font-light">
                <i className=""></i>
                <span>/sabur.7264</span>
              </span>
              <span className="font-light">
                <i className=""></i>
                <span>/abdussabur</span>
              </span>
              <span className="font-light">
                <i className=""></i>
                <span>/example</span>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
