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
        title: const Text('People'),
      ),
      body: FutureBuilder<PeopleResponse>(
        future: peopleResponse,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return _buildPeopleList(snapshot.data!);
          } else if (snapshot.hasError) {
            return Text('${snapshot.error}');
          }

          // By default, show a loading spinner.
          return const CircularProgressIndicator();
        },
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
          return Text(peopleResponse.results![index].name!);
        });
  }
}
