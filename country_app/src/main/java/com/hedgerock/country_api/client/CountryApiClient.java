package com.hedgerock.country_api.client;

import com.hedgerock.country_api.dto.CountryDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
public class CountryApiClient {

    private final RestTemplate restTemplate;

    public CountryApiClient(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @Value("${country.url}")
    private String URL;

    public List<CountryDTO> getAllCountries() {
        final CountryDTO[] dtos = restTemplate.getForObject(URL, CountryDTO[].class);
        return dtos == null ? Collections.emptyList() : Arrays.asList(dtos);
    }
}
