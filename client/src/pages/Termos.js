import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Home() {

    return (
        <>
            <Container className="container-padding">
                <Row className="align-items-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec lectus id ex ultrices eleifend. Quisque maximus risus nec posuere tempus. Cras eu justo at urna bibendum consectetur sit amet vitae lectus. Vestibulum porttitor sodales venenatis. Nunc fringilla tortor id est ultrices, a dictum erat commodo. Nulla pellentesque elementum risus vel blandit. Praesent convallis tristique elit, eu consequat orci mollis in. Praesent at justo sed felis iaculis malesuada et id metus. Duis cursus porttitor nunc, in varius nibh. Cras cursus, justo ut malesuada congue, nisi ligula facilisis tellus, condimentum auctor orci turpis at est. Suspendisse viverra commodo lacus. Etiam ex odio, eleifend blandit cursus non, fermentum a justo. Mauris ac tristique nisi. Sed quam ex, finibus vel porta a, aliquet porta ante. Sed in cursus nulla.

                        Nulla sit amet accumsan tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. In a mi eu purus mattis porttitor. Nunc lectus elit, fringilla a convallis et, gravida quis lacus. Donec finibus libero ut faucibus vehicula. Vestibulum sem ex, tincidunt a augue at, consequat laoreet urna. Donec placerat, massa vitae pretium lacinia, augue massa auctor nibh, vel congue erat nisi nec lorem. Ut placerat, risus vel imperdiet ullamcorper, turpis turpis sagittis turpis, at dapibus ligula augue at nibh. Praesent ut nulla dignissim, ultrices odio eget, blandit nunc. Phasellus in mauris ut mi porttitor cursus. Nam non rhoncus est. Mauris eu blandit nisl.

                        Pellentesque vel elit sem. Ut enim enim, molestie eget ultrices id, venenatis aliquam elit. Donec vitae metus eget tellus consequat consequat. Donec ut pellentesque lacus, vitae congue leo. Nulla vel consequat neque. Praesent et felis ac sem rutrum eleifend nec at purus. In sit amet bibendum ipsum, id consequat dui. Maecenas libero enim, interdum in ipsum id, gravida ultrices leo. Aliquam urna velit, rutrum sit amet pharetra ac, venenatis non massa. Curabitur varius sagittis justo, quis auctor magna tristique sed. Cras convallis dapibus quam, id condimentum lacus cursus eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Ut in nunc tristique, convallis tellus sit amet, ornare metus. Integer id nisl cursus nisl ornare egestas a eu orci.

                        Nullam ultrices suscipit nunc, sit amet varius leo placerat sit amet. Nulla quis odio mauris. Nam congue ultrices ante nec interdum. Vivamus fermentum urna enim, vel tristique diam facilisis at. Etiam pretium, metus fermentum egestas semper, orci metus rhoncus nulla, nec scelerisque lacus odio at diam. Vivamus finibus magna sem, sagittis tristique lectus aliquam in. Cras mollis dolor magna. Nam congue, tortor vitae blandit bibendum, ex dolor ullamcorper augue, ac sollicitudin orci lorem ut orci. Morbi accumsan rutrum mauris, sed varius magna mattis ac. Etiam condimentum vestibulum fermentum. Donec porttitor pulvinar lacus congue scelerisque. Sed eleifend ex mauris, vel pretium libero pharetra id. Nulla fermentum magna quis eros viverra interdum id quis sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sodales ligula luctus, tristique tortor sed, lacinia nisi. In at convallis diam, non pellentesque ante.

                        Maecenas vitae tristique orci. Suspendisse vitae tellus eget mauris sagittis sodales. Fusce vitae egestas ex. Duis aliquam sodales justo eget placerat. Mauris pellentesque, odio sed cursus gravida, mi lectus suscipit mi, in pharetra odio nulla non odio. Nulla at semper erat, at lobortis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent at dolor justo. Cras posuere aliquam est, laoreet egestas mi aliquam ut. Nullam dictum turpis quis elit aliquam rhoncus. Morbi sit amet tempor nibh. Donec et vehicula justo.
                    </p>
                </Row>
            </Container>
        </>
    );
}