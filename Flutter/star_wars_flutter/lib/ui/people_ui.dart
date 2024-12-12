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
    final response =
        await http.get(Uri.parse('https://swapi.dev/api/people/?page=1'));

    if (response.statusCode == 200) {
      return PeopleResponse.fromJson(response.body);
    } else {
      throw Exception('Failed to load PeopleResponse');
    }
  }

  Widget _buildPeopleList(PeopleResponse peopleResponse) {
    return GridView.builder(
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 3 / 5,
      ),
      itemCount: peopleResponse.results!.length,
      itemBuilder: (context, index) {
        return Padding(
          padding: const EdgeInsets.all(5.0),
          child: Card(
            color: const Color.fromARGB(255, 0, 0, 0),
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(
                  color: const Color.fromARGB(255, 0, 0, 0),
                  width: 2.0,
                ),
                borderRadius: BorderRadius.circular(15.0),
                boxShadow: const [
                  BoxShadow(
                    color: Color.fromARGB(255, 255, 212, 69),
                    blurRadius: 5.0,
                    spreadRadius: 2.0,
                  ),
                ],
              ),
              child: Column(
                children: <Widget>[
                  Expanded(
                    child: ClipRRect(
                      borderRadius: const BorderRadius.vertical(
                          top: Radius.circular(13.0)),
                      child: Image.network(
                        'https://starwars-visualguide.com/assets/img/characters/${peopleResponse.results![index].url!.split('/')[5]}.jpg',
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      peopleResponse.results![index].name!,
                      style:
                          const TextStyle(color: Color.fromARGB(255, 0, 0, 0)),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
// 'https://starwars-visualguide.com/assets/img/characters/${peopleResponse.results![index].url!.split('/')[5]}.jpg'
// peopleResponse.results![index].name!