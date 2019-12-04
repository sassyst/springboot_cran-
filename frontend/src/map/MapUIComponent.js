import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Map as Amap} from 'react-amap'
import {DistrictExplorer, Wrapper} from 'react-amapui-wrapper'

class MapUIComponent extends Component {
    render() {
        const useAMapUI = true
        return (
            <div>
                <Amap useAMapUI={useAMapUI}>
                    <Wrapper>
                        <DistrictExplorer
                            events={{}}
                            initialAdcode={100000}
                            eventSupport={true}
                            instanceName={'DistrictExplorer'}
                        />
                    </Wrapper>
                </Amap>
            </div>
        )
    }
}

ReactDOM.render(
    <MapUIComponent/>,
    document.querySelector('#app')
)