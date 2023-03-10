import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const CustomTabs = ({ tabeNames, setKey, key }) => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      {tabeNames.map((tab, index) => {
        return (
          <Tab eventKey={tab.label} title={<>{tab.label}</>} key={index}></Tab>
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;
