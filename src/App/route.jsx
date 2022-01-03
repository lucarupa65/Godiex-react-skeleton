import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import { Suspense, lazy } from 'react';

import ContainerImageSorter from "./modules/sorter/image-sorter/ContainerImageSorter";
import ClassificationType from "./modules/sorter/classification-type/ClassificationType";
import ContainerTrainNetwork from "./modules/sorter/train-network/ContainerTrainNetwork";
import Loading from "./shared/loarder/LoadingComponent";

export const Home = lazy(() => import('./modules/home/WelcomeMessageComponent'));

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={<Loading />}>
                <Route
                    exact
                    path="/Home"
                    component={Home}
                />
                <Route
                    exact
                    path="/Train"
                    component={ContainerTrainNetwork}
                />
                <Route
                    exact
                    path="/Sorter"
                    component={ContainerImageSorter}
                />
                <Route
                    exact
                    path="/ClassificationType"
                    component={Loading}
                />
                <Redirect to="/Home" />
            </Suspense>
        </Switch>
    );
}

export default Routes
