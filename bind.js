let myBind = function(thisArg, target) {
  let myBindArgs = [].slice.call(arguments, 2);
    
  return function() {
    return target.apply(thisArg, [...myBindArgs, ...arguments]);
  }
};

const user = "admin:";
const log = {
  error: myBind(console, console.log, "[Error]", user),
  warning: myBind(console, console.log, "[Warning]", user)
};

log.error("File not found!");
log.warning("No timezone set!");
