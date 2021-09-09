//import 'bootstrap/dist/css/bootstrap.min.css';
import SensorList from './components/SensorList';
import LineChartWeek from './components/LineChartWeek';
import LineChartMonth from './components/LineChartMonth';
import Report from './components/Report';
import Error404 from './Error404';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {

    const Print = () => {
        window.print();
    }

    return(
        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 lbg">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl leading-6 font-medium text-white">ระบบตรวจสอบคุณภาพน้ำ</h1>
                <button className="group flex items-center rounded-md lglass text-sm px-4 py-2" onClick={Print}>
                ปริ้นท์
                </button>
            </header>
            <BrowserRouter>
                <ul className="grid grid-cols-3 gap-4">
                    <li x-for="item in items">
                    <NavLink to="/components/LineChartWeek" className="hover:border-transparent hover:shadow-lg group block rounded-lg p-2 glass text-white text-center text-xl">สัปดาห์</NavLink>
                    </li>
                    <li x-for="item in items">
                    <NavLink to="/components/LineChartMonth" className="hover:border-transparent hover:shadow-lg group block rounded-lg p-2 glass text-white text-center text-xl">เดือน</NavLink>
                    </li>
                    <li x-for="item in items">
                    <NavLink to="/components/Report" className="hover:border-transparent hover:shadow-lg group block rounded-lg p-2 glass text-white text-center text-xl">รายงาน</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/components/LineChartWeek" component={LineChartWeek} />
                    <Route path="/components/LineChartMonth" component={LineChartMonth} />
                    <Route path="/components/Report" component={Report} />
                    <Redirect to="/components/LineChartWeek" />
                    <Route component={Error404} />
                </Switch>
            </BrowserRouter>
            <SensorList />
        </section>
    );
}

export default App;