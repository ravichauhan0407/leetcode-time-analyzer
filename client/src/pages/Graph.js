import React, { useContext, useEffect, useRef, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import tagsdata from "../tagsdata";
import {GraphData}  from '../helper/GraphData'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export const Graph = (props) => {
  const entryref=useRef()
  const [dropdownTag,setdropDownTag]=useState([])

  


 
  

  const updateGraph=()=>
  {
    if(dropdownTag.length>0)
    {
        let tempData=props.userdata.filter((obj)=>
        {
                for(let i=0;i<dropdownTag.length;i++)
                {
                    if(dropdownTag[i]==obj.tag)
                    {
                        return true
                    }
                }
                return false
        })
      props.updateData(tempData)
    }
  }


 const onChange=(e,{value})=>
  {
       setdropDownTag(value)
  }

  return (
    <div className="graph-body">
      <div className="graph">
        <div className="graph-width">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart barGap={5}
              barCategoryGap={5}
              width={500}
              height={300}
              data={props.userdata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tag" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar barSize={10} dataKey="Easy" fill="#556b2f" />
              <Bar barSize={10} dataKey="Medium" fill="#8B8000" />
              <Bar barSize={10} dataKey="Hard" fill="#8b0000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="right-box">
        <div className="inner-box">
          <div>
            <button
              className="box-inputs add-btn"
              style={{ backgroundColor: "#00d09c" }}
              onClick={() => {
                props.openDrawer();
              }}
            >
              Add Entry
            </button>
          </div>
          <form>
          <button
            className="box-inputs add-btn "
            style={{ backgroundColor: "#00d09c" }}
            onClick={(e) => {
                  e.preventDefault()
                  props.resetGraph()
            }}
          >Reset Graph</button>
          <button
            className="box-inputs add-btn "
            style={{ backgroundColor: "#00d09c" }}
            onClick={(e) => {
                  e.preventDefault()
                  updateGraph()
            }}
          >
            PLOT GRAPH
          </button>
          <div>
            <label for="entry">Enter number of recent entries to display</label>
            <br />
            <input ref={entryref} required={true} id="entry" className="box-inputs"></input>
          </div>
          <div className="box-inputs">
            <Dropdown
              style={{ outerWidth: "300px" }}
              placeholder="Tags"
              fluid
              multiple
              search
              selection
              options={tagsdata}
              onChange={onChange}
            />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};
