 $(function(){
			
                $("#calendar-from-01").datepicker({
													  showCurrentAtPos: 1,   numberOfMonths: 2, maxDate: $("#calendar-to-01").val(), 
					beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                        $("#calendar-to-01").datepicker("option", "minDate", dateText); 
						
                    }
				
                });
				
				 $("#calendar-to-01").datepicker({
													 showCurrentAtPos: 1,    numberOfMonths: 2, minDate: $("#calendar-from-01").val(),
													
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                       $("#calendar-from-01").datepicker("option", "maxDate", dateText);
				
                    } 
                }); 		 
	
});
 

 $(function(){
			
                $("#calendar-from-02").datepicker({
													  showCurrentAtPos: 1,   numberOfMonths: 2, maxDate: $("#calendar-to-02").val(), 
													  
													   
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                        $("#calendar-to-02").datepicker("option", "minDate", dateText); 
						
                    }
				
                });
				
				 $("#calendar-to-02").datepicker({
													 showCurrentAtPos: 1,    numberOfMonths: 2, minDate: $("#calendar-from-02").val(),
													
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                       $("#calendar-from-02").datepicker("option", "maxDate", dateText);
				
                    } 
                });  
	
});


 $(function(){
			
                $("#calendar-from-03").datepicker({
													  showCurrentAtPos: 1,   numberOfMonths: 2, maxDate: $("#calendar-to-03").val(), 
													  
													   
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                        $("#calendar-to-03").datepicker("option", "minDate", dateText); 
						
                    }
				
                });
				
				 $("#calendar-to-03").datepicker({
													 showCurrentAtPos: 1,    numberOfMonths: 2, minDate: $("#calendar-from-03").val(),
													
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                       $("#calendar-from-03").datepicker("option", "maxDate", dateText);
					   } 
                }); 
});
 
 
 $(function(){
			
                $("#calendar-from-04").datepicker({
													  showCurrentAtPos: 1,   numberOfMonths: 2, minDate: 0, 
													  
													   
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                    
						
                    }
				
                });
				
});

/*
 $(function(){
			
                $("#calendar-from-month").datepicker({
													  showCurrentAtPos: 1,   numberOfMonths: 2, maxDate: $("#calendar-to-month").val(), 
													  
													   
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                        $("#calendar-to-month").datepicker("option", "minDate", dateText); 
						
                    }
				
                });
				
				 $("#calendar-to-month").datepicker({
													 showCurrentAtPos: 1,    numberOfMonths: 2, minDate: $("#calendar-from-month").val(),
													
                    beforeShowDay: function(date) {
                        var result;
                        var dd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        var hName = ktHolidayName(dd);
                        if(hName != "") {
                            result = [true, "date-holiday", hName];
                        } else {
                            switch (date.getDay()) {
                                case 0: //日曜日
                                    result = [true, "date-holiday"];
                                    break;
                                case 6: //土曜日
                                    result = [true, "date-saturday"];
                                    break;
                                default:
                                    result = [true];
                                    break;
                            }
                        }
                        return result;
                    },
                    onSelect: function(dateText, inst) {
                       $("#calendar-from-month").datepicker("option", "maxDate", dateText);
				
                    } 
                }); 
				 
				 
	
});
 */

 $(function() {
    $('#calendar-from-month').datepicker({
    format: 'mm/yyyy',
    language: 'ja',  
    format: 'mm/yyyy',
    weekStart: 1,             
    calendarWeeks: true, 
    language: 'ja',          
    autoclose: true ,            
    startDate: Date(),        
    daysOfWeekDisabled: [ '0', '6']
    });
});
 
 
