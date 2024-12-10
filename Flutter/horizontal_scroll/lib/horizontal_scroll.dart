import 'package:flutter/material.dart';

class HorizontalScroll extends StatefulWidget {
  const HorizontalScroll({super.key});

  @override
  State<HorizontalScroll> createState() => _HorizontalScrollState();
}

class _HorizontalScrollState extends State<HorizontalScroll> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Horizontal Scroll'),
      ),
      body: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          SizedBox(
            width: 300,
            height: 400,
            child: Center(
                child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(140.0),
                  child: SizedBox(
                    width: 250,
                    height: 500,
                    child: Image.network(
                      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/b0obWWCLRVRqRzlSK1LSGtADkLM.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Row(children: [
                  Container(
                    margin: const EdgeInsets.only(top: 20, left: 25),
                    child: const Text(
                      'Venom el último baile',
                      style: TextStyle(fontSize: 25),
                      textAlign: TextAlign.left,
                    ),
                  ),
                ]),
                Row(
                  children: [
                    Container(
                      margin: const EdgeInsets.only(left: 25),
                      child: const Text(
                        '2021',
                        style: TextStyle(
                          fontSize: 20,
                          color: Color.fromARGB(232, 148, 148, 148),
                        ),
                        textAlign: TextAlign.left,
                      ),
                    ),
                  ],
                ),
              ],
            )),
          ),
          SizedBox(
            width: 300,
            height: 400,
            child: Center(
                child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(140.0),
                  child: SizedBox(
                    width: 250,
                    height: 500,
                    child: Image.network(
                      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/RGtqJD856BJ7kZ88v7ZPz84tU6.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Row(children: [
                  Container(
                    margin: const EdgeInsets.only(top: 20, left: 25),
                    child: const Text(
                      'V de Vendetta',
                      style: TextStyle(fontSize: 25),
                      textAlign: TextAlign.left,
                    ),
                  ),
                ]),
                Row(
                  children: [
                    Container(
                      margin: const EdgeInsets.only(left: 25),
                      child: const Text(
                        '2021',
                        style: TextStyle(
                          fontSize: 20,
                          color: Color.fromARGB(232, 148, 148, 148),
                        ),
                        textAlign: TextAlign.left,
                      ),
                    ),
                  ],
                ),
              ],
            )),
          ),
          SizedBox(
            width: 300,
            height: 400,
            child: Center(
                child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(140.0),
                  child: SizedBox(
                    width: 250,
                    height: 500,
                    child: Image.network(
                      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/sIWv5HtDlUFvacsuA1fRNWZ5GFH.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Row(children: [
                  Container(
                    margin: const EdgeInsets.only(top: 20, left: 25),
                    child: const Text(
                      'Sidelined',
                      style: TextStyle(fontSize: 25),
                      textAlign: TextAlign.left,
                    ),
                  ),
                ]),
                Row(
                  children: [
                    Container(
                      margin: const EdgeInsets.only(left: 25),
                      child: const Text(
                        '2021',
                        style: TextStyle(
                          fontSize: 20,
                          color: Color.fromARGB(232, 148, 148, 148),
                        ),
                        textAlign: TextAlign.left,
                      ),
                    ),
                  ],
                ),
              ],
            )),
          ),
        ],
      ),
    );
  }
}
