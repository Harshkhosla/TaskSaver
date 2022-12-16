import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'

function Home() {
    return (
        <>
            <Navbar />
            <div className='Home d-flex justify-content-center align-items-center'>
                <input className='rounded-2 bg-primary text-white border-0 Calendar py-1 px-2 ' type='month' id='month'></input>
            </div>
            <div className=' container tableDiv border p-2 bg-white border border-1 border-light mb-3'>
                <div class="table-responsive">
                    <table class="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th scope="col" className='Date'>Date</th>
                                <th scope="col" className='Project'>Project</th>
                                <th scope="col" className='Task'>Task</th>
                                <th scope="col" className='Task Description'>Task Description</th>
                                <th scope="col" className='Time'>Time</th>
                                <th scope="col" className='Total_Time'>Total Time</th>
                                <th scope="col" className='Status'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td contentEditable="true" className='tableSet'></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>


                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">3</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">4</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">5</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">6</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">7</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">8</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">9</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">10</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">11</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">12</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">13</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                 <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">14</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">15</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">16</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">17</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">18</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">19</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">20</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">21</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">22</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">23</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">24</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">25</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                               <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">26</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">27</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">28</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                               <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">29</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">30</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td scope="row">31</td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td contentEditable="true"></td>
                                <td><select id="inputState" class="form-select statussec py-0 border-0">
                                    <option selected>On Leave</option>
                                    <option selected>Compeleted</option>
                                    <option selected>In Process</option>
                                </select></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='btn btn-primary saveButton'>Save</button>
            </div>

        </>
    )
}

export default Home
