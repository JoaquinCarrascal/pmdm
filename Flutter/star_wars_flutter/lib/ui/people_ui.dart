import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:star_wars_flutter/people_response/people_response.dart';

class PeopleUIWidget extends StatefulWidget {
  const PeopleUIWidget({super.key});

  @override
  State<PeopleUIWidget> createState() => _PeopleUIWidgetState();
}

class _PeopleUIWidgetState extends State<PeopleUIWidget> {
  late Future<PeopleResponse> peopleResponse;

  @override
  void initState() {
    super.initState();
    peopleResponse = getPeople();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 0, 0, 0),
        title: Center(
            child: Image.asset('images/sw_logo.png', width: 100, height: 100)),
      ),
      body: Container(
        color: const Color.fromARGB(255, 0, 0, 0),
        child: FutureBuilder<PeopleResponse>(
          future: peopleResponse,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return _buildPeopleList(snapshot.data!);
            } else if (snapshot.hasError) {
              return Text('${snapshot.error}');
            }

            // By default, show a loading spinner.
            return const Center(child: CircularProgressIndicator());
          },
        ),
      ),
    );
  }

  Future<PeopleResponse> getPeople() async {
    final response = await http.get(Uri.parse('https://swapi.dev/api/people/'));

    if (response.statusCode == 200) {
      return PeopleResponse.fromJson(response.body);
    } else {
      throw Exception('Failed to load PeopleResponse');
    }
  }

  Widget _buildPeopleList(PeopleResponse peopleResponse) {
    return ListView.builder(
        itemCount: peopleResponse.results!.length,
        itemBuilder: (context, index) {
          return Card.filled(
              child: _SampleCard(
                  peopleName: peopleResponse.results![index].name!,
                  peopleImgUrl:
                      'https://starwars-visualguide.com/assets/img/characters/${peopleResponse.results![index].url!.split('/')[5]}.jpg'));
        });
  }
}
// Text(peopleResponse.results![index].name!)

class _SampleCard extends StatelessWidget {
  const _SampleCard({required this.peopleName, required this.peopleImgUrl});
  final String peopleName;
  final String peopleImgUrl;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 300,
      height: 100,
      child: Container(
          decoration: BoxDecoration(
            color: const Color.fromARGB(255, 26, 26, 26),
            borderRadius: BorderRadius.circular(10),
            boxShadow: const [
              BoxShadow(
                color: Color.fromARGB(255, 255, 253, 123),
                blurRadius: 4,
              )
            ],
          ),
          child: Center(
              child: Row(
            children: [
              Image.network(peopleImgUrl, width: 130, height: 95),
              Text(peopleName,
                  style: const TextStyle(
                      color: Color.fromARGB(255, 218, 218, 218), fontSize: 20)),
            ],
          ))),
    );
  }
}
