const coreLibraries = new Set([

]);

module.exports = {
    shared: (libName, defaultConfig) => {
        if(coreLibraries.has(libName)){
            return defaultConfig;
        }

        return false;
    }
};