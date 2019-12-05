package com.bupt.model;

import com.bupt.common.enums.WirelessLinkModelType;

import java.io.Serializable;

public class WirelessLinkModel implements Serializable {
  Integer CaseNum;
  Integer CaseTTI;
  WirelessLinkModelType ModelType;
  Integer Circumstance;
  Integer FrequencyRage;
  Integer K1;
  Integer K2;
  Integer network_id;
  Integer id;

  public WirelessLinkModel(
      Integer caseNum,
      Integer caseTTI,
      WirelessLinkModelType modelType,
      Integer circumstance,
      Integer frequencyRage,
      Integer k1,
      Integer k2,
      Integer network_id,
      Integer id) {
    CaseNum = caseNum;
    CaseTTI = caseTTI;
    ModelType = modelType;
    Circumstance = circumstance;
    FrequencyRage = frequencyRage;
    K1 = k1;
    K2 = k2;
    this.network_id = network_id;
    this.id = id;
  }

  public Integer getCaseNum() {
    return CaseNum;
  }

  public void setCaseNum(Integer caseNum) {
    CaseNum = caseNum;
  }

  public Integer getCaseTTI() {
    return CaseTTI;
  }

  public void setCaseTTI(Integer caseTTI) {
    CaseTTI = caseTTI;
  }

  public WirelessLinkModelType getModelType() {
    return ModelType;
  }

  public void setModelType(WirelessLinkModelType modelType) {
    ModelType = modelType;
  }

  public Integer getCircumstance() {
    return Circumstance;
  }

  public void setCircumstance(Integer circumstance) {
    Circumstance = circumstance;
  }

  public Integer getFrequencyRage() {
    return FrequencyRage;
  }

  public void setFrequencyRage(Integer frequencyRage) {
    FrequencyRage = frequencyRage;
  }

  public Integer getK1() {
    return K1;
  }

  public void setK1(Integer k1) {
    K1 = k1;
  }

  public Integer getK2() {
    return K2;
  }

  public void setK2(Integer k2) {
    K2 = k2;
  }

  public Integer getNetwork_id() {
    return network_id;
  }

  public void setNetwork_id(Integer network_id) {
    this.network_id = network_id;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }
}
