import { CHARTS_OPTIONS } from "../../../constants/charts"

export const getChartOptions = (title = 'Chart') => {
    const options = CHARTS_OPTIONS;
    options.plugins.title = title;
    return options;

}