class Formatter {
  //add static methods here

    static capitalize(sentance){
        return sentance.charAt(0).toUpperCase() + sentance.slice(1)

    }

    static sanitize(sentance){
        return sentance.replace(/[^A-Za-z0-9-' ]/g,'')
    }

    static titleize(sentance){
       let array =  sentance.split(' ')
       Formatter.capitalize(array[0])

    }


} // end of class 