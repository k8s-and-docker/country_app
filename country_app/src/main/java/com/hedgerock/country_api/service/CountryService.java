package com.hedgerock.country_api.service;

import com.hedgerock.country_api.dto.CountryDTO;

import java.util.List;

public interface CountryService {

    void processCountries();

    List<CountryDTO> getAllCountries();

    CountryDTO getDetailsByAlpha2Code(String alpha2Code);

}
