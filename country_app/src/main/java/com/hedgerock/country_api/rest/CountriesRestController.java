package com.hedgerock.country_api.rest;

import com.hedgerock.country_api.service.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/countries")
public class CountriesRestController {

    private final CountryService countryService;

    @PostMapping
    public ResponseEntity<?> processCountries() {
        countryService.processCountries();
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<?> findAllCountries() {
        return ResponseEntity.ok(countryService.getAllCountries());
    }

    @GetMapping("cc2/{alpha2}")
    public ResponseEntity<?> getCountryByAlpha2(@PathVariable String alpha2) {
        return ResponseEntity.ok(countryService.getDetailsByAlpha2Code(alpha2));
    }
}
