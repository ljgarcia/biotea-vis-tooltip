/*jslint node: true */
/*jshint laxbreak: true */
"use strict";
/*
 * Copyright (c) 2015 ljgarcia
 * Licensed under the Apache 2 license.
 */

var d3 = require('d3');
var _ = require('underscore');

var Tooltip = function() {
    return {
        create: function(container, header, data) {
            d3.select('.biotea_annot_tooltip').remove();
            var tooltipContainer = container.append("div")
                .attr("class", "biotea_annot_tooltip");

            tooltipContainer
                .style('left', (d3.event.pageX + 10) + 'px')
                .style('top', (d3.event.pageY) + 'px')
                .transition(200)
                .style('opacity', 1)
                .style('display','block');

            var table = tooltipContainer.append('table').classed('biotea_annot_tooltip_table', true);

            if (header) {
                var headRow = table.append('tr').classed('biotea_annot_tooltip_header', true);
                headRow.append('th').attr('colspan', '2').text(header);
            }

            _.each(data, function(datum) {
                var row = table.append('tr').classed('biotea_annot_tooltip_body', true);
                row.append('td').text(datum[0]);
                row.append('td').text(datum[1]);
            });
        },
        remove: function() {
            var tooltipContainer = d3.select('.biotea_annot_tooltip');
            tooltipContainer.transition(20)
                .style('opacity',0)
                .style('display','none');
            tooltipContainer.remove();
        }
    };
}();

module.exports = Tooltip;